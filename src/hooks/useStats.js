import { useState, useEffect } from 'react';
import { getStats, getStakeholdersStats } from '../services/api';

export const useStats = (ambiente = 'parlamento') => {
  const [stats, setStats] = useState({
    totalGeral: 0,
    documentosHoje: 0,
    porCategoria: [],
    ultimaAtualizacao: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = ambiente === 'parlamento'
          ? await getStats()
          : await getStakeholdersStats();
        setStats(data.data);
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Atualizar stats a cada 5 minutos
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [ambiente]);

  return { stats, loading };
};