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

// CATEGORIAS DE STAKEHOLDERS
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
    tipo: 'Outros'
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
