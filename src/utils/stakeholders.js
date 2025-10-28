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
  stake_concertacao: {
    nome: 'Concertação Social',
    nomeCompleto: 'Parceiros de Concertação Social',
    tipo: 'Diálogo Social',
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
    nome: 'Laboral',
    nomeCompleto: 'Sindicatos e Organizações de Trabalhadores',
    tipo: 'Trabalho',
    icon: UsersIcon,
    cor: 'from-amber-400 to-orange-500',
    borderCor: 'border-amber-500',
    bgCor: 'bg-amber-500/10',
    shadowCor: 'shadow-amber-500/50',
    textCor: 'text-amber-400',
    sources: [
      // TODO: Adicionar URLs de sindicatos e organizações laborais
    ],
  },
  stake_ambiente: {
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
  stake_agricultura: {
    nome: 'Agricultura',
    nomeCompleto: 'Setor Agrícola e Pecuário',
    tipo: 'Agricultura',
    icon: TruckIcon,
    cor: 'from-lime-400 to-green-500',
    borderCor: 'border-lime-500',
    bgCor: 'bg-lime-500/10',
    shadowCor: 'shadow-lime-500/50',
    textCor: 'text-lime-400',
    sources: [
      // TODO: Adicionar URLs do setor agrícola
      // Exemplos: CAP, Confagri, cooperativas, etc.
    ],
  },
  stake_economia: {
    nome: 'Economia/Finanças',
    nomeCompleto: 'Setor Financeiro e Empresarial',
    tipo: 'Economia',
    icon: BanknotesIcon,
    cor: 'from-yellow-400 to-amber-500',
    borderCor: 'border-yellow-500',
    bgCor: 'bg-yellow-500/10',
    shadowCor: 'shadow-yellow-500/50',
    textCor: 'text-yellow-400',
    sources: [
      // TODO: Adicionar URLs do setor financeiro/empresarial
      // Exemplos: CIP, AEP, APB, Banco de Portugal, etc.
    ],
  },
  stake_saude: {
    nome: 'Saúde',
    nomeCompleto: 'Setor da Saúde e Ordens Profissionais',
    tipo: 'Saúde',
    icon: HeartIcon,
    cor: 'from-red-400 to-rose-500',
    borderCor: 'border-red-500',
    bgCor: 'bg-red-500/10',
    shadowCor: 'shadow-red-500/50',
    textCor: 'text-red-400',
    sources: [
      // TODO: Adicionar URLs do setor da saúde
      // Exemplos: Ordem dos Médicos, Ordem dos Enfermeiros, SNS, hospitais, etc.
    ],
  },
  stake_imobiliario: {
    nome: 'Imobiliário/Habitação',
    nomeCompleto: 'Setor Imobiliário e Habitação',
    tipo: 'Habitação',
    icon: HomeModernIcon,
    cor: 'from-stone-400 to-gray-500',
    borderCor: 'border-stone-500',
    bgCor: 'bg-stone-500/10',
    shadowCor: 'shadow-stone-500/50',
    textCor: 'text-stone-400',
    sources: [
      // TODO: Adicionar URLs do setor imobiliário
      // Exemplos: APEMIP, construtoras, associações de inquilinos, etc.
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

// ✅ CORRIGIDO: IDs com prefixo 'stake_' para corresponder à BD
export const STAKEHOLDERS_PADRAO = [
  'stake_concertacao',
  'stake_laboral',
  'stake_ambiente',
  'stake_agricultura',
  'stake_economia',
  'stake_saude',
  'stake_imobiliario',
];
