# 📋 Guia de Scraping para Stakeholders

## 🎯 Objetivo

Fazer scraping dos websites de organizações (sindicatos, patronato, ONGs, partidos, etc.) para popular as categorias de stakeholders no radar.

## 📁 Estrutura de Dados (Frontend)

Ficheiro: `src/utils/stakeholders.js`

Cada stakeholder tem um array `sources` com URLs para scraping:

```javascript
concertacao_social: {
  nome: 'Concertação Social',
  sources: [
    { nome: 'CGTP-IN', url: 'https://www.cgtp.pt/accao-e-luta', tipo: 'Sindicato' },
    { nome: 'UGT', url: 'https://www.ugt.pt/noticias', tipo: 'Sindicato' },
    { nome: 'CAP', url: 'https://www.cap.pt/noticias-cap', tipo: 'Patronato' },
    { nome: 'CCP', url: 'https://ccp.pt/noticias/', tipo: 'Patronato' },
    { nome: 'CTP', url: 'https://ctp.org.pt/noticias', tipo: 'Patronato' },
  ]
}
```

## 🔧 Implementação no Backend

### 1. Criar Scrapers por Categoria

Criar scrapers similares aos que já tens para o parlamento, mas para estas organizações:

```
/scrapers
  /stakeholders
    /concertacao-social
      - cgtp-scraper.js
      - ugt-scraper.js
      - cap-scraper.js
      - ccp-scraper.js
      - ctp-scraper.js
    /laboral
      - (adicionar depois)
    /ambiente
      - (adicionar depois)
    ...
```

### 2. Estrutura dos Documentos Scrapeados

Os documentos devem seguir esta estrutura para serem compatíveis com o frontend:

```javascript
{
  id: String,                    // ID único
  titulo: String,                // Título da notícia/documento
  categoria: String,             // 'concertacao_social', 'laboral', 'ambiente', etc.
  fonte: String,                 // 'CGTP-IN', 'UGT', 'CAP', etc.
  tipo_conteudo: String,         // 'noticia', 'comunicado', 'evento', etc.
  data_publicacao: Date,         // Data de publicação
  url_original: String,          // URL do documento original
  conteudo: String,              // Texto completo (opcional)
  resumo: String,                // Resumo/descrição
  tags: [String],                // Tags/palavras-chave (opcional)
  created_at: Date,              // Data de scraping
  updated_at: Date,              // Última atualização
}
```

### 3. Categorias de Stakeholders

| ID | Nome | Descrição |
|----|------|-----------|
| `concertacao_social` | Concertação Social | Parceiros sociais (sindicatos + patronato) |
| `laboral` | Laboral | Sindicatos e organizações de trabalhadores |
| `ambiente` | Ambiente | Organizações ambientais |
| `agricultura` | Agricultura | Setor agrícola e pecuário |
| `economia_financas` | Economia/Finanças | Setor financeiro e empresarial |
| `saude` | Saúde | Setor da saúde e ordens profissionais |
| `imobiliario_habitacao` | Imobiliário/Habitação | Setor imobiliário |
| `partidos` | Partidos | Partidos políticos |

### 4. API Endpoints

Usar os mesmos endpoints existentes, apenas com categorias diferentes:

- `GET /api/documents?categoria=concertacao_social` - Listar documentos
- `GET /api/documents/stats` - Stats por categoria (incluir stakeholders)
- `GET /api/documents/search?q=greve&categoria=concertacao_social` - Pesquisar

### 5. Exemplo de Scraper (CGTP)

```javascript
// scrapers/stakeholders/concertacao-social/cgtp-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeCGTP() {
  const url = 'https://www.cgtp.pt/accao-e-luta';
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const documents = [];

  // Adaptar seletores conforme estrutura HTML do site
  $('.noticia-item').each((i, element) => {
    const titulo = $(element).find('.titulo').text().trim();
    const link = $(element).find('a').attr('href');
    const data = $(element).find('.data').text().trim();
    const resumo = $(element).find('.resumo').text().trim();

    documents.push({
      titulo,
      categoria: 'concertacao_social',
      fonte: 'CGTP-IN',
      tipo_conteudo: 'noticia',
      data_publicacao: parseDate(data),
      url_original: link.startsWith('http') ? link : `https://www.cgtp.pt${link}`,
      resumo,
      created_at: new Date(),
    });
  });

  return documents;
}

module.exports = { scrapeCGTP };
```

### 6. Scheduler

Configurar scraping periódico (similar ao parlamento):

```javascript
// Executar scrapers de stakeholders a cada 6 horas
cron.schedule('0 */6 * * *', async () => {
  console.log('🔍 Starting stakeholder scrapers...');

  // Concertação Social
  await scrapeCGTP();
  await scrapeUGT();
  await scrapeCAP();
  await scrapeCCP();
  await scrapeCTP();

  console.log('✅ Stakeholder scrapers completed');
});
```

## 🎨 Frontend (Já Implementado)

O frontend já está preparado para receber os documentos:

1. **Radar de Stakeholders**: Mostra 8 categorias com counts
2. **Modal de Documentos**: Lista documentos por categoria (igual ao parlamentar)
3. **Filtros**: Por fonte, tipo, data, etc.
4. **Pesquisa**: Funciona automaticamente

## 📝 Próximos Passos (Backend)

1. ✅ **Concertação Social** - 5 fontes já configuradas
2. ⏳ **Adicionar URLs** para outras 7 categorias
3. ⏳ **Criar scrapers** para cada fonte
4. ⏳ **Testar scrapers** individualmente
5. ⏳ **Configurar scheduler** para execução automática
6. ⏳ **Monitorizar** erros e logs

## 🚀 Como Testar

1. Implementa scraper para CGTP
2. Executa manualmente
3. Verifica se documentos aparecem no frontend:
   - Categoria: Concertação Social
   - Fonte: CGTP-IN
4. Testa filtros e pesquisa

## ⚠️ Notas Importantes

- **Respeitar robots.txt** de cada site
- **Rate limiting**: Não sobrecarregar sites
- **Error handling**: Sites podem mudar estrutura HTML
- **Logs**: Registar sucessos e falhas
- **Duplicados**: Verificar antes de inserir na BD

## 📞 Dúvidas?

Qualquer dúvida sobre a estrutura ou implementação, avisa!
