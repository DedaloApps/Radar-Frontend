# Requisitos Backend - Sistema de Stakeholders

## 📋 Resumo

Este documento descreve os requisitos do backend para implementar o sistema de **Stakeholders** no Radar Legislativo. O sistema permite aos utilizadores alternar entre visualização de dados parlamentares e dados de entidades externas (stakeholders).

---

## 🎯 Objetivos

1. Fazer scraping de 29 sites de stakeholders organizados em 7 categorias
2. Armazenar notícias/documentos dessas entidades
3. Fornecer endpoints API para o frontend consultar estes dados
4. Manter a mesma estrutura de dados dos documentos parlamentares

---

## 🏛️ Categorias de Stakeholders

### 1. Concertação Social (5 sites)
- **CGTP**: https://www.cgtp.pt/accao-e-luta
- **UGT**: https://www.ugt.pt/noticias
- **CAP**: https://www.cap.pt/noticias-cap
- **CCP**: https://ccp.pt/noticias/
- **CTP**: https://ctp.org.pt/noticias

### 2. Laboral (3 sites)
- **ACT**: https://portal.act.gov.pt/Pages/TodasNoticias.aspx#1
- **CITE**: https://cite.gov.pt/noticias-antigas
- **AIMA**: https://aima.gov.pt/pt/noticias

### 3. Ambiente (6 sites)
- **APA**: https://apambiente.pt/destaques
- **IGAMAOT**: https://www.igamaot.gov.pt/pt/espaco-publico/destaques#1
- **DGEG**: https://www.dgeg.gov.pt/pt/destaques/
- **DGAV**: https://www.dgav.pt/destaques/noticias/
- **ADENE**: https://www.adene.pt/comunicacao/noticias/
- **ERSE**: https://www.erse.pt/comunicacao/destaques/

### 4. Agricultura (2 sites)
- **DGADR**: https://www.dgadr.gov.pt/pt/destaques
- **INIAV**: https://www.iniav.pt/divulgacao/noticias-iniav

### 5. Economia/Finanças (7 sites)
- **IAPMEI**: https://www.iapmei.pt/NOTICIAS.aspx
- **AdC**: https://www.concorrencia.pt/pt/noticias-comunicados-e-intervencoes
- **AT**: https://info-aduaneiro.portaldasfinancas.gov.pt/pt/noticias/Pages/noticias.aspx
- **Banco Portugal**: https://www.bportugal.pt/comunicados/media/banco-de-portugal
- **Portugal Global**: https://portugalglobal.pt/noticias/
- **DGPC**: https://www.consumidor.gov.pt/comunicacao1/noticias1?page=1
- **DGAE**: https://www.dgae.gov.pt/comunicacao/noticias.aspx

### 6. Saúde (3 sites)
- **INFARMED**: https://www.infarmed.pt/web/infarmed/noticias
- **ERS**: https://www.ers.pt/pt/comunicacao/noticias/
- **IGAS**: https://www.igas.min-saude.pt/category/noticias-e-eventos/noticias/

### 7. Imobiliário/Habitação (3 sites)
- **CMVM**: https://www.cmvm.pt/PInstitucional/Content?Input=E9639BDA21F5F3D13613E5F7C187F1A785B6EE9D48F21D9B121B7E5EC2D6A6F5
- **DGT**: https://www.dgterritorio.gov.pt/todas-noticias
- **IHRU**: https://www.ihru.pt/noticias

---

## 📊 Modelo de Dados

### Documento Stakeholder

```javascript
{
  id: String,                    // ID único
  titulo: String,                // Título da notícia/documento
  descricao: String,             // Descrição/resumo
  data: Date,                    // Data de publicação
  url: String,                   // URL original
  categoria: String,             // Categoria stakeholder (ex: 'stake_concertacao')
  fonte: String,                 // Nome da entidade (ex: 'CGTP', 'UGT')
  tipo_conteudo: String,         // Tipo (ex: 'noticia', 'comunicado', 'geral')
  created_at: Date,              // Data de inserção no sistema
  updated_at: Date               // Data de última atualização
}
```

### Mapeamento de Categorias

```javascript
const CATEGORIAS_STAKEHOLDERS = {
  'stake_concertacao': 'Concertação Social',
  'stake_laboral': 'Laboral',
  'stake_ambiente': 'Ambiente',
  'stake_agricultura': 'Agricultura',
  'stake_economia': 'Economia/Finanças',
  'stake_saude': 'Saúde',
  'stake_habitacao': 'Imobiliário/Habitação'
};
```

---

## 🔌 Endpoints API Necessários

### 1. Listar Documentos de Stakeholders

```
GET /api/stakeholders/documents
```

**Query Parameters:**
- `categoria` (opcional): Filtrar por categoria stakeholder
- `fonte` (opcional): Filtrar por fonte específica
- `limit` (opcional): Número de resultados (padrão: 50)
- `offset` (opcional): Paginação

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "123abc",
      "titulo": "CGTP convoca greve geral",
      "descricao": "A CGTP convocou uma greve geral...",
      "data": "2025-10-27T10:00:00Z",
      "url": "https://www.cgtp.pt/accao-e-luta/...",
      "categoria": "stake_concertacao",
      "fonte": "CGTP",
      "tipo_conteudo": "comunicado",
      "created_at": "2025-10-27T10:05:00Z"
    }
  ],
  "total": 150
}
```

---

### 2. Pesquisar Documentos de Stakeholders

```
GET /api/stakeholders/search
```

**Query Parameters:**
- `q`: Termo de pesquisa (obrigatório)

**Resposta:**
```json
{
  "success": true,
  "data": [
    // Array de documentos que correspondem à pesquisa
  ]
}
```

---

### 3. Estatísticas de Stakeholders

```
GET /api/stakeholders/stats
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "totalGeral": 450,
    "documentosHoje": 12,
    "porCategoria": [
      {
        "_id": "stake_concertacao",
        "total": 85
      },
      {
        "_id": "stake_laboral",
        "total": 42
      }
      // ... outras categorias
    ],
    "ultimaAtualizacao": "2025-10-27T14:30:00Z"
  }
}
```

---

## 🤖 Implementação do Scraping

### Requisitos Técnicos

1. **Tecnologias Sugeridas:**
   - Node.js com Puppeteer/Playwright para sites dinâmicos
   - Cheerio para sites estáticos
   - Axios para requests HTTP

2. **Frequência de Scraping:**
   - Executar a cada 1-2 horas via cron job
   - Verificar apenas novos documentos (evitar duplicados)

3. **Estrutura Recomendada:**
   ```
   backend/
   ├── scrapers/
   │   ├── concertacao/
   │   │   ├── cgtp.js
   │   │   ├── ugt.js
   │   │   ├── cap.js
   │   │   └── ...
   │   ├── laboral/
   │   │   ├── act.js
   │   │   └── ...
   │   └── ...
   ├── models/
   │   └── StakeholderDocument.js
   ├── routes/
   │   └── stakeholders.js
   └── jobs/
       └── scraping-job.js
   ```

### Exemplo de Scraper

```javascript
// scrapers/concertacao/cgtp.js

const puppeteer = require('puppeteer');

async function scrapeCGTP() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.cgtp.pt/accao-e-luta');

  const noticias = await page.evaluate(() => {
    const items = [];
    // Lógica específica para extrair notícias do site
    document.querySelectorAll('.noticia-item').forEach(item => {
      items.push({
        titulo: item.querySelector('.titulo').textContent,
        descricao: item.querySelector('.descricao').textContent,
        url: item.querySelector('a').href,
        data: item.querySelector('.data').textContent
      });
    });
    return items;
  });

  await browser.close();

  return noticias.map(n => ({
    ...n,
    categoria: 'stake_concertacao',
    fonte: 'CGTP',
    tipo_conteudo: 'noticia'
  }));
}

module.exports = { scrapeCGTP };
```

---

## 📝 Tarefas do Backend

### Fase 1: Setup Inicial
- [ ] Criar modelo de dados `StakeholderDocument`
- [ ] Criar rotas `/api/stakeholders/*`
- [ ] Implementar endpoints básicos (GET, search, stats)

### Fase 2: Scrapers
- [ ] Implementar scrapers para cada site (29 no total)
- [ ] Testar cada scraper individualmente
- [ ] Implementar lógica de detecção de duplicados

### Fase 3: Automação
- [ ] Criar cron job para executar scrapers periodicamente
- [ ] Implementar sistema de logs para monitorizar scrapers
- [ ] Adicionar tratamento de erros e retry logic

### Fase 4: Otimização
- [ ] Implementar cache para reduzir load
- [ ] Adicionar paginação eficiente
- [ ] Otimizar queries de base de dados

---

## 🔍 Considerações Importantes

### 1. Rate Limiting
- Implementar delays entre requests para não sobrecarregar os sites
- Respeitar robots.txt de cada site

### 2. Tratamento de Erros
- Sites podem mudar estrutura HTML - necessário monitorização
- Implementar alertas quando scrapers falham

### 3. Performance
- Usar workers/queue system para scraping paralelo
- Implementar cache de resultados frequentes

### 4. Legal/Ético
- Verificar se scraping é permitido pelos sites
- Considerar usar APIs oficiais quando disponíveis
- Adicionar User-Agent apropriado

---

## 🚀 Integração Frontend-Backend

O frontend já está preparado para:
1. Alternar entre ambientes (Parlamento ↔ Stakeholders)
2. Fazer requests aos novos endpoints
3. Mostrar dados no mesmo layout de radar
4. Filtrar e pesquisar documentos de stakeholders

**Próximo Passo:** Implementar os endpoints no backend e começar com os scrapers!

---

## 📞 Contacto

Se tiveres dúvidas sobre a implementação, consulta:
- Código frontend em `/src/contexts/EnvironmentContext.jsx`
- Estrutura de categorias em `/src/utils/categories.js`
- API services em `/src/services/api.js`
