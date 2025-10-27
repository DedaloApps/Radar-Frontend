# 🚀 Setup Backend - Sistema de Stakeholders

## 📦 O que foi implementado?

Implementei **completamente** o sistema de stakeholders no backend! Aqui está tudo o que foi feito:

### ✅ Alterações no Backend

1. **Modelo de Dados** (`src/models/Document.js`)
   - Adicionar campo `tipo_radar` (parlamento | stakeholders)
   - Filtros por tipo_radar

2. **Scrapers** (`src/scrapers/stakeholders.js`)
   - 29 sites configurados
   - Categorias: `stake_concertacao`, `stake_laboral`, `stake_ambiente`, etc.
   - Seletor UGT corrigido com HTML real

3. **Endpoints API**
   - `GET /api/stakeholders/documents` - Listar documentos
   - `GET /api/stakeholders/stats` - Estatísticas
   - `GET /api/stakeholders/search?q=termo` - Pesquisar

4. **Documentação**
   - `MIGRATION_STAKEHOLDERS.md` - Guia completo de migration SQL

---

## 🔧 Como Aplicar no Teu Backend

### Opção 1: Aplicar Patch Automático (Mais Rápido)

```bash
# 1. Ir para o diretório do backend
cd /caminho/para/Radar

# 2. Criar branch
git checkout -b stakeholders-system

# 3. Aplicar o patch
git apply /caminho/para/backend-stakeholders.patch

# 4. Ver o que mudou
git status

# 5. Commit e push
git add -A
git commit -m "feat: adicionar sistema stakeholders"
git push -u origin stakeholders-system
```

### Opção 2: Copiar Ficheiros Manualmente

Se o patch não funcionar, podes copiar os ficheiros diretamente:

**Ficheiros NOVOS** (criar):
```
📁 Backend
├── src/controllers/stakeholderController.js  ← NOVO
├── src/routes/stakeholderRoutes.js           ← NOVO
└── MIGRATION_STAKEHOLDERS.md                 ← NOVO
```

**Ficheiros MODIFICADOS** (substituir):
```
├── src/models/Document.js         ← MODIFICADO
├── src/scrapers/stakeholders.js   ← MODIFICADO
└── src/server.js                  ← MODIFICADO
```

Todos os ficheiros estão em:
- Frontend repo: `/home/user/Radar-Backend/...`
- Ou no branch: `claude/stakeholders-system-011CUXcWc3bi6tAbh2BvRqK2`

---

## 🗄️ Migration da Base de Dados (Supabase)

**IMPORTANTE:** Precisas executar este SQL no Supabase!

```sql
-- 1. Adicionar coluna tipo_radar
ALTER TABLE documents
ADD COLUMN IF NOT EXISTS tipo_radar VARCHAR(50) DEFAULT 'parlamento';

-- 2. Criar index para performance
CREATE INDEX IF NOT EXISTS idx_documents_tipo_radar
ON documents(tipo_radar);

-- 3. Atualizar documentos existentes
UPDATE documents
SET tipo_radar = 'parlamento'
WHERE tipo_radar IS NULL;
```

### Como executar no Supabase:

1. Vai ao **Supabase Dashboard**
2. Clica em **SQL Editor**
3. Cola o SQL acima
4. Clica em **Run**
5. Verifica se apareceu a coluna:
   ```sql
   SELECT column_name FROM information_schema.columns
   WHERE table_name = 'documents';
   ```
   Deve aparecer `tipo_radar` na lista!

---

## 🧪 Testar Localmente

### 1. Instalar dependências (se ainda não tens)

```bash
cd Radar-Backend
npm install
```

### 2. Verificar `.env`

Confirma que tens estas variáveis:

```env
SUPABASE_URL=https://teu-projeto.supabase.co
SUPABASE_KEY=tua_chave_aqui
PORT=3000
```

### 3. Iniciar servidor

```bash
npm run dev
```

Deves ver:
```
🚀 Servidor rodando em http://localhost:3000
📡 API disponível em http://localhost:3000/api
✅ Supabase conectado
```

### 4. Testar endpoints

```bash
# Health check
curl http://localhost:3000/api/health

# Stakeholders (vai estar vazio até fazeres scraping)
curl http://localhost:3000/api/stakeholders/documents
curl http://localhost:3000/api/stakeholders/stats

# Parlamento (os teus dados existentes)
curl http://localhost:3000/api/documents
curl http://localhost:3000/api/documents/stats
```

---

## 🤖 Executar Scraper de Stakeholders

### Primeiro teste - APENAS UGT

Vamos testar só com a UGT primeiro:

```bash
# Edita src/scrapers/stakeholders.js temporariamente
# Comenta todos os stakeholders EXCETO 'ugt'

# Depois executa:
npm run scrape
```

Se funcionar, vais ver:
```
🔍 Scraping UGT...
  📊 Encontrados: X documentos
  ✅ UGT: X novos, 0 duplicados
```

### Depois: Todos os stakeholders

Quando a UGT funcionar, descomenta os outros e executa de novo!

---

## ☁️ Deploy no Render

### 1. Push para GitHub

```bash
git push origin stakeholders-system
```

### 2. No Render Dashboard

- Vai ao teu serviço backend
- Ele vai detetar o novo commit
- **Auto-deploy** vai começar
- Aguarda 2-3 minutos

### 3. Verificar deploy

```bash
# Substitui pela tua URL do Render
curl https://radar-vul1.onrender.com/api/health
curl https://radar-vul1.onrender.com/api/stakeholders/stats
```

---

## 🎨 Testar com Frontend

### 1. Certifica-te que o frontend aponta para o backend correto

No frontend `.env`:
```env
VITE_API_URL=http://localhost:3000/api  # Local
# ou
VITE_API_URL=https://radar-vul1.onrender.com/api  # Produção
```

### 2. Iniciar frontend

```bash
cd Radar-Frontend
npm run dev
```

### 3. Abrir browser

1. Ir a `http://localhost:5173`
2. Fazer login
3. **Clicar no toggle central** do header (Parlamento ↔ Stakeholders)
4. Deve alternar entre ambientes!

---

## 📋 Checklist Final

Backend:
- [ ] Patch aplicado ou ficheiros copiados
- [ ] Migration SQL executada no Supabase
- [ ] Coluna `tipo_radar` existe na tabela `documents`
- [ ] Servidor local inicia sem erros
- [ ] Endpoint `/api/stakeholders/stats` responde
- [ ] Código pushed para GitHub
- [ ] Deploy no Render concluído

Frontend:
- [ ] Branch `claude/explore-project-011CUXcWc3bi6tAbh2BvRqK2` pushed
- [ ] Toggle de ambiente aparece no header
- [ ] Consegues alternar entre Parlamento ↔ Stakeholders
- [ ] Deploy na Vercel concluído

---

## ❓ Problemas Comuns

### "TypeError: Document.find is not a function"
→ Verifica que fizeste import correto: `import Document from '../models/Document.js'`

### "Column tipo_radar does not exist"
→ Não executaste a migration SQL! Vai ao Supabase SQL Editor

### "Cannot read property 'data' of undefined"
→ Backend não está a responder. Verifica se está a correr e URL está correta

### "No stakeholders documents found"
→ Normal! Ainda não executaste o scraper. Executa `npm run scrape`

---

## 🎉 Próximos Passos

1. **Hoje:**
   - Aplica backend (10 min)
   - Executa migration SQL (2 min)
   - Testa localmente (5 min)
   - Deploy (5 min)

2. **Esta semana:**
   - Executa scraper UGT
   - Verifica se dados aparecem
   - Adiciona outros scrapers progressivamente

3. **Quando quiseres:**
   - Envia-me HTML dos outros 28 sites
   - Corrijo os seletores
   - Ativa todos os scrapers

---

## 📞 Suporte

Se tiveres algum problema:
1. Verifica os logs do Render
2. Verifica consola do browser (F12)
3. Testa endpoints com `curl` ou Postman
4. Manda-me screenshot do erro!

Está tudo pronto para usar! 🚀
