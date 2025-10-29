import {
  UserGroupIcon,
  UsersIcon,
  GlobeAltIcon,
  TruckIcon,
  BanknotesIcon,
  HeartIcon,
  HomeModernIcon,
  FlagIcon,
  BriefcaseIcon,
  BoltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

// 🎨 CORES: #262261 (roxo) e #27aae2 (azul)

// CATEGORIAS DE STAKEHOLDERS COM FONTES DE SCRAPING
export const STAKEHOLDERS = {
  stake_concertacao: {
    numero: '🤝',
    nome: 'Concertação Social',
    tipo: 'Diálogo Social',
    nomeCompleto: 'Concertação Social (CGTP, UGT, CAP, CCP, CTP)',
    icon: UserGroupIcon,
    cor: 'from-orange-400 to-red-500',
    borderCor: 'border-orange-500',
    bgCor: 'bg-orange-500/10',
    shadowCor: 'shadow-orange-500/50',
    textCor: 'text-orange-400',
    sources: [
      { nome: 'CGTP-IN', url: 'https://www.cgtp.pt/accao-e-luta', tipo: 'Sindicato' },
      { nome: 'UGT', url: 'https://www.ugt.pt/noticias', tipo: 'Sindicato' },
      { nome: 'CAP', url: 'https://www.cap.pt/noticias-cap', tipo: 'Patronato' },
      { nome: 'CCP', url: 'https://ccp.pt/noticias/', tipo: 'Patronato' },
      { nome: 'CTP', url: 'https://ctp.org.pt/noticias', tipo: 'Patronato' },
    ],
  },
  stake_laboral: {
    numero: '👷',
    nome: 'Trabalho e Laboral',
    tipo: 'Trabalho',
    nomeCompleto: 'Trabalho e Laboral (ACT, CITE, AIMA)',
    icon: BriefcaseIcon,
    cor: 'from-amber-400 to-orange-500',
    borderCor: 'border-amber-500',
    bgCor: 'bg-amber-500/10',
    shadowCor: 'shadow-amber-500/50',
    textCor: 'text-amber-400',
    sources: [
      { nome: 'ACT', url: 'https://portal.act.gov.pt/Pages/TodasNoticias.aspx', tipo: 'Entidade Pública' },
      { nome: 'CITE', url: 'https://cite.gov.pt/noticias-antigas', tipo: 'Entidade Pública' },
      { nome: 'AIMA', url: 'https://aima.gov.pt/pt/noticias', tipo: 'Entidade Pública' },
    ],
  },
  stake_ambiente: {
    numero: '🌿',
    nome: 'Ambiente',
    tipo: 'Ambiente',
    nomeCompleto: 'Ambiente (APA, IGAMAOT, DGAV, DGEG, ADENE, ERSE)',
    icon: BoltIcon,
    cor: 'from-green-400 to-emerald-500',
    borderCor: 'border-green-500',
    bgCor: 'bg-green-500/10',
    shadowCor: 'shadow-green-500/50',
    textCor: 'text-green-400',
    sources: [
      { nome: 'APA', url: 'https://apambiente.pt/destaques', tipo: 'Entidade Pública' },
      { nome: 'IGAMAOT', url: 'https://www.igamaot.gov.pt/pt/espaco-publico/destaques#1', tipo: 'Entidade Pública' },
      { nome: 'DGAV', url: 'https://www.dgav.pt/destaques/noticias/', tipo: 'Entidade Pública' },
      { nome: 'DGEG', url: 'https://www.dgeg.gov.pt/pt/destaques/', tipo: 'Entidade Pública' },
      { nome: 'ADENE', url: 'https://www.adene.pt/comunicacao/noticias/', tipo: 'Entidade Pública' },
      { nome: 'ERSE', url: 'https://www.erse.pt/comunicacao/destaques/', tipo: 'Entidade Pública' },
    ],
  },
  stake_agricultura: {
    numero: '🌾',
    nome: 'Agricultura',
    tipo: 'Agricultura',
    nomeCompleto: 'Agricultura (DGADR, INIAV)',
    icon: TruckIcon,
    cor: 'from-lime-400 to-green-500',
    borderCor: 'border-lime-500',
    bgCor: 'bg-lime-500/10',
    shadowCor: 'shadow-lime-500/50',
    textCor: 'text-lime-400',
    sources: [
      { nome: 'DGADR', url: 'https://www.dgadr.gov.pt/pt/destaques', tipo: 'Entidade Pública' },
      { nome: 'INIAV', url: 'https://www.iniav.pt/divulgacao/noticias-iniav', tipo: 'Entidade Pública' },
    ],
  },
  stake_economia: {
    numero: '💼',
    nome: 'Economia e Finanças',
    tipo: 'Economia',
    nomeCompleto: 'Economia e Finanças (IAPMEI, AdC, AT, Banco de Portugal, etc.)',
    icon: ChartBarIcon,
    cor: 'from-yellow-400 to-amber-500',
    borderCor: 'border-yellow-500',
    bgCor: 'bg-yellow-500/10',
    shadowCor: 'shadow-yellow-500/50',
    textCor: 'text-yellow-400',
    sources: [
      { nome: 'IAPMEI', url: 'https://www.iapmei.pt/NOTICIAS.aspx', tipo: 'Entidade Pública' },
      { nome: 'AdC', url: 'https://www.concorrencia.pt/pt/noticias-comunicados-e-intervencoes', tipo: 'Entidade Pública' },
      { nome: 'Banco de Portugal', url: 'https://www.bportugal.pt/comunicados/media/banco-de-portugal', tipo: 'Entidade Pública' },
      { nome: 'Portugal Global', url: 'https://portugalglobal.pt/noticias/', tipo: 'Entidade Pública' },
      { nome: 'DGAE', url: 'https://www.dgae.gov.pt/comunicacao/noticias.aspx', tipo: 'Entidade Pública' },
    ],
  },
  stake_saude: {
    numero: '⚕️',
    nome: 'Saúde',
    tipo: 'Saúde',
    nomeCompleto: 'Saúde (INFARMED, ERS, IGAS)',
    icon: HeartIcon,
    cor: 'from-red-400 to-rose-500',
    borderCor: 'border-red-500',
    bgCor: 'bg-red-500/10',
    shadowCor: 'shadow-red-500/50',
    textCor: 'text-red-400',
    sources: [
      { nome: 'INFARMED', url: 'https://www.infarmed.pt/web/infarmed/noticias', tipo: 'Entidade Pública' },
      { nome: 'ERS', url: 'https://www.ers.pt/pt/comunicacao/noticias-1/', tipo: 'Entidade Pública' },
      { nome: 'IGAS', url: 'https://www.igas.min-saude.pt/comunicacao/destaques/', tipo: 'Entidade Pública' },
    ],
  },
  stake_imobiliario: {
    numero: '🏠',
    nome: 'Imobiliário e Habitação',
    tipo: 'Habitação',
    nomeCompleto: 'Imobiliário e Habitação (CMVM, DGTerritório, IHRU)',
    icon: HomeModernIcon,
    cor: 'from-stone-400 to-gray-500',
    borderCor: 'border-stone-500',
    bgCor: 'bg-stone-500/10',
    shadowCor: 'shadow-stone-500/50',
    textCor: 'text-stone-400',
    sources: [
      { nome: 'CMVM', url: 'https://www.cmvm.pt/pt/Comunicados/Paginas/Index.aspx', tipo: 'Entidade Pública' },
      { nome: 'DGTerritório', url: 'https://www.dgterritorio.gov.pt/noticias', tipo: 'Entidade Pública' },
      { nome: 'IHRU', url: 'https://www.ihru.pt/web/guest/noticias', tipo: 'Entidade Pública' },
    ],
  },
  stake_partidos: {
    numero: '🏛️',
    nome: 'Partidos Políticos',
    tipo: 'Política',
    nomeCompleto: 'Partidos Políticos (PSD, PS, Chega, IL, BE, PCP, Livre, CDS-PP, PAN)',
    icon: FlagIcon,
    cor: 'from-blue-400 to-indigo-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    sources: [
      // PSD
      { nome: 'PSD', url: 'https://www.psd.pt/pt/noticias', tipo: 'Partido' },
      { nome: 'PSD (Observador)', url: 'https://observador.pt/seccao/politica/psd/', tipo: 'Partido' },
      { nome: 'PSD (CNN)', url: 'https://cnnportugal.iol.pt/noticias/PSD', tipo: 'Partido' },
      // TODO: Adicionar outros partidos:
      // PS, Chega, IL, BE, PCP, Livre, CDS-PP, PAN
    ],
  },
};

export const getStakeholderInfo = (stakeholderId) => {
  return STAKEHOLDERS[stakeholderId] || {
    nome: 'Outros',
    icon: UserGroupIcon,
    cor: 'from-gray-400 to-gray-600',
    borderCor: 'border-gray-500',
    bgCor: 'bg-gray-500/10',
    shadowCor: 'shadow-gray-500/50',
    textCor: 'text-gray-400',
    tipo: 'Outros',
    sources: []
  };
};

// ✅ Lista de stakeholders por defeito (com prefixo 'stake_')
export const STAKEHOLDERS_PADRAO = [
  'stake_concertacao',
  'stake_laboral',
  'stake_ambiente',
  'stake_agricultura',
  'stake_economia',
  'stake_saude',
  'stake_imobiliario',
  'stake_partidos',
];

/**
 * ESTRUTURA PARA O BACKEND
 * 
 * Cada stakeholder tem um array `sources` com objetos:
 * {
 *   nome: string,      // Nome da organização
 *   url: string,       // URL para scraping
 *   tipo: string       // Tipo de organização (Sindicato, Patronato, ONG, etc.)
 * }
 * 
 * BACKEND DEVE:
 * 1. Ler este ficheiro ou criar similar no backend
 * 2. Fazer scraping dos URLs em sources
 * 3. Criar documentos com:
 *    - categoria: ID do stakeholder (ex: 'stake_concertacao')
 *    - fonte: nome da organização (ex: 'CGTP-IN')
 *    - tipo_conteudo: tipo extraído do scraping
 *    - outros campos conforme o scraping
 * 
 * EXEMPLO DE DOCUMENTO SCRAPEADO:
 * {
 *   id: "unique-id",
 *   titulo: "Manifestação contra precariedade",
 *   categoria: "stake_concertacao",
 *   fonte: "CGTP-IN",
 *   tipo_conteudo: "noticia",
 *   data_publicacao: "2025-01-15",
 *   url_original: "https://www.cgtp.pt/...",
 *   conteudo: "...",
 * }
 */
