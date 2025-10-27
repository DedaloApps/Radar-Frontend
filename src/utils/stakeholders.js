import {
  UserGroupIcon,
  UsersIcon,
  GlobeAltIcon,
  TruckIcon,
  BanknotesIcon,
  HeartIcon,
  HomeModernIcon,
  FlagIcon,
} from '@heroicons/react/24/solid';

// 🎨 CORES: #262261 (roxo) e #27aae2 (azul)

// CATEGORIAS DE STAKEHOLDERS COM FONTES DE SCRAPING
export const STAKEHOLDERS = {
  concertacao_social: {
    nome: 'Concertação Social',
    nomeCompleto: 'Parceiros de Concertação Social',
    tipo: 'Diálogo Social',
    icon: UserGroupIcon,
    cor: 'from-blue-400 to-cyan-500',
    borderCor: 'border-blue-500',
    bgCor: 'bg-blue-500/10',
    shadowCor: 'shadow-blue-500/50',
    textCor: 'text-blue-400',
    sources: [
      { nome: 'CGTP-IN', url: 'https://www.cgtp.pt/accao-e-luta', tipo: 'Sindicato' },
      { nome: 'UGT', url: 'https://www.ugt.pt/noticias', tipo: 'Sindicato' },
      { nome: 'CAP', url: 'https://www.cap.pt/noticias-cap', tipo: 'Patronato' },
      { nome: 'CCP', url: 'https://ccp.pt/noticias/', tipo: 'Patronato' },
      { nome: 'CTP', url: 'https://ctp.org.pt/noticias', tipo: 'Patronato' },
    ],
  },
  laboral: {
    nome: 'Laboral',
    nomeCompleto: 'Sindicatos e Organizações de Trabalhadores',
    tipo: 'Trabalho',
    icon: UsersIcon,
    cor: 'from-red-400 to-rose-500',
    borderCor: 'border-red-500',
    bgCor: 'bg-red-500/10',
    shadowCor: 'shadow-red-500/50',
    textCor: 'text-red-400',
    sources: [
      // TODO: Adicionar URLs de sindicatos e organizações laborais
    ],
  },
  ambiente: {
    nome: 'Ambiente',
    nomeCompleto: 'Organizações Ambientais e Sustentabilidade',
    tipo: 'Ambiente',
    icon: GlobeAltIcon,
    cor: 'from-green-400 to-emerald-500',
    borderCor: 'border-green-500',
    bgCor: 'bg-green-500/10',
    shadowCor: 'shadow-green-500/50',
    textCor: 'text-green-400',
    sources: [
      // TODO: Adicionar URLs de organizações ambientais
      // Exemplos: Quercus, Zero, LPN, etc.
    ],
  },
  agricultura: {
    nome: 'Agricultura',
    nomeCompleto: 'Setor Agrícola e Pecuário',
    tipo: 'Agricultura',
    icon: TruckIcon,
    cor: 'from-amber-400 to-yellow-500',
    borderCor: 'border-amber-500',
    bgCor: 'bg-amber-500/10',
    shadowCor: 'shadow-amber-500/50',
    textCor: 'text-amber-400',
    sources: [
      // TODO: Adicionar URLs do setor agrícola
      // Exemplos: CAP, Confagri, cooperativas, etc.
    ],
  },
  economia_financas: {
    nome: 'Economia/Finanças',
    nomeCompleto: 'Setor Financeiro e Empresarial',
    tipo: 'Economia',
    icon: BanknotesIcon,
    cor: 'from-emerald-400 to-green-500',
    borderCor: 'border-emerald-500',
    bgCor: 'bg-emerald-500/10',
    shadowCor: 'shadow-emerald-500/50',
    textCor: 'text-emerald-400',
    sources: [
      // TODO: Adicionar URLs do setor financeiro/empresarial
      // Exemplos: CIP, AEP, APB, Banco de Portugal, etc.
    ],
  },
  saude: {
    nome: 'Saúde',
    nomeCompleto: 'Setor da Saúde e Ordens Profissionais',
    tipo: 'Saúde',
    icon: HeartIcon,
    cor: 'from-pink-400 to-rose-500',
    borderCor: 'border-pink-500',
    bgCor: 'bg-pink-500/10',
    shadowCor: 'shadow-pink-500/50',
    textCor: 'text-pink-400',
    sources: [
      // TODO: Adicionar URLs do setor da saúde
      // Exemplos: Ordem dos Médicos, Ordem dos Enfermeiros, SNS, hospitais, etc.
    ],
  },
  imobiliario_habitacao: {
    nome: 'Imobiliário/Habitação',
    nomeCompleto: 'Setor Imobiliário e Habitação',
    tipo: 'Habitação',
    icon: HomeModernIcon,
    cor: 'from-slate-400 to-blue-500',
    borderCor: 'border-slate-500',
    bgCor: 'bg-slate-500/10',
    shadowCor: 'shadow-slate-500/50',
    textCor: 'text-slate-400',
    sources: [
      // TODO: Adicionar URLs do setor imobiliário
      // Exemplos: APEMIP, construtoras, associações de inquilinos, etc.
    ],
  },
  partidos: {
    nome: 'Partidos',
    nomeCompleto: 'Partidos Políticos',
    tipo: 'Política',
    icon: FlagIcon,
    cor: 'from-purple-400 to-indigo-500',
    borderCor: 'border-purple-500',
    bgCor: 'bg-purple-500/10',
    shadowCor: 'shadow-purple-500/50',
    textCor: 'text-purple-400',
    sources: [
      // TODO: Adicionar URLs dos partidos políticos
      // Exemplos: PS, PSD, Chega, IL, BE, PCP, Livre, PAN, CDS, etc.
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

// Stakeholders padrão (todas as 8 categorias)
export const STAKEHOLDERS_PADRAO = [
  'concertacao_social',
  'laboral',
  'ambiente',
  'agricultura',
  'economia_financas',
  'saude',
  'imobiliario_habitacao',
  'partidos',
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
 *    - categoria: ID do stakeholder (ex: 'concertacao_social')
 *    - fonte: nome da organização (ex: 'CGTP-IN')
 *    - tipo_conteudo: tipo extraído do scraping
 *    - outros campos conforme o scraping
 *
 * EXEMPLO DE DOCUMENTO SCRAPEADO:
 * {
 *   id: "unique-id",
 *   titulo: "Manifestação contra precariedade",
 *   categoria: "concertacao_social",
 *   fonte: "CGTP-IN",
 *   tipo_conteudo: "noticia",
 *   data_publicacao: "2025-01-15",
 *   url_original: "https://www.cgtp.pt/...",
 *   conteudo: "...",
 * }
 */
