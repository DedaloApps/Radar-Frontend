import {
  ScaleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  FlagIcon,
  BanknotesIcon,
  ChartBarIcon,
  TruckIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  BoltIcon,
  MusicalNoteIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  EyeIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  DocumentMagnifyingGlassIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BeakerIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/24/solid';

// 🎨 NOVAS CORES: #262261 (roxo) e #27aae2 (azul)
export const COMISSOES = {
  comissao_01: {
    numero: '1.ª',
    nome: 'Assuntos Constitucionais',
    nomeCompleto: 'Assuntos Constitucionais, Direitos, Liberdades e Garantias',
    icon: ScaleIcon,
    cor: 'from-blue-400 to-cyan-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/1CACDLG/Paginas/default.aspx'
  },
  comissao_02: {
    numero: '2.ª',
    nome: 'Negócios Estrangeiros',
    nomeCompleto: 'Negócios Estrangeiros e Comunidades Portuguesas',
    icon: GlobeAltIcon,
    cor: 'from-cyan-400 to-blue-500',
    borderCor: 'border-cyan-500',
    bgCor: 'bg-cyan-500/10',
    shadowCor: 'shadow-cyan-500/50',
    textCor: 'text-cyan-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/2CNECP/Paginas/default.aspx'
  },
  comissao_03: {
    numero: '3.ª',
    nome: 'Defesa Nacional',
    nomeCompleto: 'Defesa Nacional',
    icon: ShieldCheckIcon,
    cor: 'from-indigo-400 to-purple-500',
    borderCor: 'border-indigo-500',
    bgCor: 'bg-indigo-500/10',
    shadowCor: 'shadow-indigo-500/50',
    textCor: 'text-indigo-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/3CDN/Paginas/default.aspx'
  },
  comissao_04: {
    numero: '4.ª',
    nome: 'Assuntos Europeus',
    nomeCompleto: 'Assuntos Europeus',
    icon: FlagIcon,
    cor: 'from-violet-400 to-purple-500',
    borderCor: 'border-violet-500',
    bgCor: 'bg-violet-500/10',
    shadowCor: 'shadow-violet-500/50',
    textCor: 'text-violet-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/4CAE/Paginas/default.aspx'
  },
  comissao_05: {
    numero: '5.ª',
    nome: 'Orçamento e Finanças',
    nomeCompleto: 'Orçamento, Finanças e Administração Pública',
    icon: BanknotesIcon,
    cor: 'from-sky-400 to-blue-500',
    borderCor: 'border-sky-500',
    bgCor: 'bg-sky-500/10',
    shadowCor: 'shadow-sky-500/50',
    textCor: 'text-sky-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/5COFAP/Paginas/default.aspx'
  },
  comissao_06: {
    numero: '6.ª',
    nome: 'Economia e Coesão',
    nomeCompleto: 'Economia e Coesão Territorial',
    icon: ChartBarIcon,
    cor: 'from-purple-400 to-violet-500',
    borderCor: 'border-purple-500',
    bgCor: 'bg-purple-500/10',
    shadowCor: 'shadow-purple-500/50',
    textCor: 'text-purple-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/6CECT/Paginas/default.aspx'
  },
  comissao_07: {
    numero: '7.ª',
    nome: 'Agricultura e Pescas',
    nomeCompleto: 'Agricultura e Pescas',
    icon: TruckIcon,
    cor: 'from-teal-400 to-cyan-500',
    borderCor: 'border-teal-500',
    bgCor: 'bg-teal-500/10',
    shadowCor: 'shadow-teal-500/50',
    textCor: 'text-teal-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/7CAPes/Paginas/default.aspx'
  },
  comissao_08: {
    numero: '8.ª',
    nome: 'Educação e Ciência',
    nomeCompleto: 'Educação e Ciência',
    icon: AcademicCapIcon,
    cor: 'from-blue-400 to-indigo-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/8CEC/Paginas/default.aspx'
  },
  comissao_09: {
    numero: '9.ª',
    nome: 'Saúde',
    nomeCompleto: 'Saúde',
    icon: HeartIcon,
    cor: 'from-rose-400 to-pink-500',
    borderCor: 'border-rose-500',
    bgCor: 'bg-rose-500/10',
    shadowCor: 'shadow-rose-500/50',
    textCor: 'text-rose-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/9CS/Paginas/default.aspx'
  },
  comissao_10: {
    numero: '10.ª',
    nome: 'Trabalho e Seg. Social',
    nomeCompleto: 'Trabalho, Segurança Social e Inclusão',
    icon: UserGroupIcon,
    cor: 'from-cyan-400 to-blue-500',
    borderCor: 'border-cyan-500',
    bgCor: 'bg-cyan-500/10',
    shadowCor: 'shadow-cyan-500/50',
    textCor: 'text-cyan-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/10CTSSI/Paginas/default.aspx'
  },
  comissao_11: {
    numero: '11.ª',
    nome: 'Ambiente e Energia',
    nomeCompleto: 'Ambiente e Energia',
    icon: BoltIcon,
    cor: 'from-teal-400 to-blue-500',
    borderCor: 'border-teal-500',
    bgCor: 'bg-teal-500/10',
    shadowCor: 'shadow-teal-500/50',
    textCor: 'text-teal-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/11CAEne/Paginas/default.aspx'
  },
  comissao_12: {
    numero: '12.ª',
    nome: 'Cultura e Comunicação',
    nomeCompleto: 'Cultura, Comunicação, Juventude e Desporto',
    icon: MusicalNoteIcon,
    cor: 'from-purple-400 to-fuchsia-500',
    borderCor: 'border-purple-500',
    bgCor: 'bg-purple-500/10',
    shadowCor: 'shadow-purple-500/50',
    textCor: 'text-purple-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/12CCCJD/Paginas/default.aspx'
  },
  comissao_13: {
    numero: '13.ª',
    nome: 'Reforma do Estado',
    nomeCompleto: 'Reforma do Estado e Poder Local',
    icon: BuildingOffice2Icon,
    cor: 'from-indigo-400 to-violet-500',
    borderCor: 'border-indigo-500',
    bgCor: 'bg-indigo-500/10',
    shadowCor: 'shadow-indigo-500/50',
    textCor: 'text-indigo-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/13CREPL/Paginas/default.aspx'
  },
  comissao_14: {
    numero: '14.ª',
    nome: 'Infraestruturas',
    nomeCompleto: 'Infraestruturas, Mobilidade e Habitação',
    icon: HomeModernIcon,
    cor: 'from-slate-400 to-blue-500',
    borderCor: 'border-slate-500',
    bgCor: 'bg-slate-500/10',
    shadowCor: 'shadow-slate-500/50',
    textCor: 'text-slate-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/14CIMH/Paginas/default.aspx'
  },
  comissao_15: {
    numero: '15.ª',
    nome: 'Transparência',
    nomeCompleto: 'Transparência e Estatuto dos Deputados',
    icon: EyeIcon,
    cor: 'from-cyan-400 to-blue-500',
    borderCor: 'border-cyan-500',
    bgCor: 'bg-cyan-500/10',
    shadowCor: 'shadow-cyan-500/50',
    textCor: 'text-cyan-400',
    url: 'https://www.parlamento.pt/sites/com/XVIILeg/15CTED/Paginas/default.aspx'
  },
  // NOVAS CATEGORIAS GERAIS - COM NOVAS CORES
  geral_iniciativas: {
    numero: '🆕',
    nome: 'Últimas Iniciativas',
    nomeCompleto: 'Últimas Iniciativas Entradas',
    icon: DocumentCheckIcon,
    cor: 'from-blue-400 to-cyan-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    url: 'https://www.parlamento.pt/Paginas/UltimasIniciativasEntradas.aspx'
  },
  geral_perguntas: {
    numero: '❓',
    nome: 'Perguntas e Requer.',
    nomeCompleto: 'Perguntas e Requerimentos',
    icon: ChatBubbleLeftRightIcon,
    cor: 'from-purple-400 to-violet-500',
    borderCor: 'border-purple-500',
    bgCor: 'bg-purple-500/10',
    shadowCor: 'shadow-purple-500/50',
    textCor: 'text-purple-400',
    url: 'https://www.parlamento.pt/ActividadeParlamentar/Paginas/PerguntasRequerimentos.aspx'
  },
  geral_votacoes: {
    numero: '🗳️',
    nome: 'Votações',
    nomeCompleto: 'Arquivo de Votações',
    icon: HandRaisedIcon,
    cor: 'from-indigo-400 to-purple-500',
    borderCor: 'border-indigo-500',
    bgCor: 'bg-indigo-500/10',
    shadowCor: 'shadow-indigo-500/50',
    textCor: 'text-indigo-400',
    url: 'https://www.parlamento.pt/ArquivoDocumentacao/Paginas/Arquivodevotacoes.aspx'
  },
  geral_sumulas: {
    numero: '📋',
    nome: 'Súmulas Conf. Líderes',
    nomeCompleto: 'Súmulas da Conferência de Líderes',
    icon: DocumentMagnifyingGlassIcon,
    cor: 'from-cyan-400 to-teal-500',
    borderCor: 'border-cyan-500',
    bgCor: 'bg-cyan-500/10',
    shadowCor: 'shadow-cyan-500/50',
    textCor: 'text-cyan-400',
    url: 'https://www.parlamento.pt/ActividadeParlamentar/Paginas/Sumulas-Conferencia-Lideres.aspx'
  }
};

// TIPOS DE CONTEÚDO - COM NOVAS CORES (tons de azul/roxo)
export const TIPOS_CONTEUDO = {
  agenda: { nome: 'Agenda', emoji: '📅', cor: 'bg-blue-500' },
  audicao: { nome: 'Audição', emoji: '🎤', cor: 'bg-purple-500' },
  audiencia: { nome: 'Audiência', emoji: '👥', cor: 'bg-indigo-500' },
  iniciativa: { nome: 'Iniciativa', emoji: '📜', cor: 'bg-cyan-500' },
  peticao: { nome: 'Petição', emoji: '✍️', cor: 'bg-violet-500' },
  pergunta: { nome: 'Pergunta', emoji: '❓', cor: 'bg-purple-500' },
  requerimento: { nome: 'Requerimento', emoji: '📝', cor: 'bg-indigo-500' },
  votacao: { nome: 'Votação', emoji: '🗳️', cor: 'bg-blue-500' },
  sumula: { nome: 'Súmula', emoji: '📋', cor: 'bg-cyan-500' },
  geral: { nome: 'Geral', emoji: '📄', cor: 'bg-slate-500' }
};

// ==========================================
// 🏛️ STAKEHOLDERS - Entidades Externas
// ==========================================
export const STAKEHOLDERS = {
  // CONCERTAÇÃO SOCIAL
  stake_concertacao: {
    numero: '🤝',
    nome: 'Concertação Social',
    nomeCompleto: 'Concertação Social - Sindicatos e Patronato',
    icon: UserGroupIcon,
    cor: 'from-amber-400 to-orange-500',
    borderCor: 'border-amber-500',
    bgCor: 'bg-amber-500/10',
    shadowCor: 'shadow-amber-500/50',
    textCor: 'text-amber-400',
    sites: [
      { nome: 'CGTP', url: 'https://www.cgtp.pt/accao-e-luta' },
      { nome: 'UGT', url: 'https://www.ugt.pt/noticias' },
      { nome: 'CAP', url: 'https://www.cap.pt/noticias-cap' },
      { nome: 'CCP', url: 'https://ccp.pt/noticias/' },
      { nome: 'CTP', url: 'https://ctp.org.pt/noticias' }
    ]
  },

  // LABORAL
  stake_laboral: {
    numero: '👷',
    nome: 'Laboral',
    nomeCompleto: 'Autoridades Laborais e Migração',
    icon: BriefcaseIcon,
    cor: 'from-blue-400 to-indigo-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    sites: [
      { nome: 'ACT', url: 'https://portal.act.gov.pt/Pages/TodasNoticias.aspx#1' },
      { nome: 'CITE', url: 'https://cite.gov.pt/noticias-antigas' },
      { nome: 'AIMA', url: 'https://aima.gov.pt/pt/noticias' }
    ]
  },

  // AMBIENTE
  stake_ambiente: {
    numero: '🌱',
    nome: 'Ambiente',
    nomeCompleto: 'Ambiente e Energia',
    icon: BoltIcon,
    cor: 'from-green-400 to-emerald-500',
    borderCor: 'border-green-500',
    bgCor: 'bg-green-500/10',
    shadowCor: 'shadow-green-500/50',
    textCor: 'text-green-400',
    sites: [
      { nome: 'APA', url: 'https://apambiente.pt/destaques' },
      { nome: 'IGAMAOT', url: 'https://www.igamaot.gov.pt/pt/espaco-publico/destaques#1' },
      { nome: 'DGEG', url: 'https://www.dgeg.gov.pt/pt/destaques/' },
      { nome: 'DGAV', url: 'https://www.dgav.pt/destaques/noticias/' },
      { nome: 'ADENE', url: 'https://www.adene.pt/comunicacao/noticias/' },
      { nome: 'ERSE', url: 'https://www.erse.pt/comunicacao/destaques/' }
    ]
  },

  // AGRICULTURA
  stake_agricultura: {
    numero: '🌾',
    nome: 'Agricultura',
    nomeCompleto: 'Agricultura e Desenvolvimento Rural',
    icon: TruckIcon,
    cor: 'from-lime-400 to-green-500',
    borderCor: 'border-lime-500',
    bgCor: 'bg-lime-500/10',
    shadowCor: 'shadow-lime-500/50',
    textCor: 'text-lime-400',
    sites: [
      { nome: 'DGADR', url: 'https://www.dgadr.gov.pt/pt/destaques' },
      { nome: 'INIAV', url: 'https://www.iniav.pt/divulgacao/noticias-iniav' }
    ]
  },

  // ECONOMIA/FINANÇAS
  stake_economia: {
    numero: '💰',
    nome: 'Economia/Finanças',
    nomeCompleto: 'Economia, Finanças e Comércio',
    icon: CurrencyEuroIcon,
    cor: 'from-purple-400 to-violet-500',
    borderCor: 'border-purple-500',
    bgCor: 'bg-purple-500/10',
    shadowCor: 'shadow-purple-500/50',
    textCor: 'text-purple-400',
    sites: [
      { nome: 'IAPMEI', url: 'https://www.iapmei.pt/NOTICIAS.aspx' },
      { nome: 'AdC', url: 'https://www.concorrencia.pt/pt/noticias-comunicados-e-intervencoes' },
      { nome: 'AT', url: 'https://info-aduaneiro.portaldasfinancas.gov.pt/pt/noticias/Pages/noticias.aspx' },
      { nome: 'Banco Portugal', url: 'https://www.bportugal.pt/comunicados/media/banco-de-portugal' },
      { nome: 'Portugal Global', url: 'https://portugalglobal.pt/noticias/' },
      { nome: 'DGPC', url: 'https://www.consumidor.gov.pt/comunicacao1/noticias1?page=1' },
      { nome: 'DGAE', url: 'https://www.dgae.gov.pt/comunicacao/noticias.aspx' }
    ]
  },

  // SAÚDE
  stake_saude: {
    numero: '⚕️',
    nome: 'Saúde',
    nomeCompleto: 'Autoridades de Saúde',
    icon: HeartIcon,
    cor: 'from-red-400 to-rose-500',
    borderCor: 'border-red-500',
    bgCor: 'bg-red-500/10',
    shadowCor: 'shadow-red-500/50',
    textCor: 'text-red-400',
    sites: [
      { nome: 'INFARMED', url: 'https://www.infarmed.pt/web/infarmed/noticias' },
      { nome: 'ERS', url: 'https://www.ers.pt/pt/comunicacao/noticias/' },
      { nome: 'IGAS', url: 'https://www.igas.min-saude.pt/category/noticias-e-eventos/noticias/' }
    ]
  },

  // IMOBILIÁRIO/HABITAÇÃO
  stake_habitacao: {
    numero: '🏠',
    nome: 'Imobiliário/Habitação',
    nomeCompleto: 'Imobiliário, Habitação e Território',
    icon: HomeModernIcon,
    cor: 'from-cyan-400 to-blue-500',
    borderCor: 'border-cyan-500',
    bgCor: 'bg-cyan-500/10',
    shadowCor: 'shadow-cyan-500/50',
    textCor: 'text-cyan-400',
    sites: [
      { nome: 'CMVM', url: 'https://www.cmvm.pt/PInstitucional/Content?Input=E9639BDA21F5F3D13613E5F7C187F1A785B6EE9D48F21D9B121B7E5EC2D6A6F5' },
      { nome: 'DGT', url: 'https://www.dgterritorio.gov.pt/todas-noticias' },
      { nome: 'IHRU', url: 'https://www.ihru.pt/noticias' }
    ]
  }
};

export const getCategoriaInfo = (categoria, ambiente = 'parlamento') => {
  if (ambiente === 'stakeholders') {
    return STAKEHOLDERS[categoria] || {
      nome: 'Outros',
      icon: ScaleIcon,
      cor: 'from-gray-400 to-gray-600',
      borderCor: 'border-gray-500',
      bgCor: 'bg-gray-500/10',
      shadowCor: 'shadow-gray-500/50',
      textCor: 'text-gray-400'
    };
  }

  return COMISSOES[categoria] || {
    nome: 'Outros',
    icon: ScaleIcon,
    cor: 'from-gray-400 to-gray-600',
    borderCor: 'border-gray-500',
    bgCor: 'bg-gray-500/10',
    shadowCor: 'shadow-gray-500/50',
    textCor: 'text-gray-400'
  };
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getFonteNome = (fonte) => {
  return fonte === 'diario_republica' 
    ? 'Diário da República' 
    : 'Parlamento';
};