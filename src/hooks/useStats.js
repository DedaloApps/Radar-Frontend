import { useState, useEffect } from 'react';
import { getStats } from '../services/api';

// ✅ ADICIONAR o parâmetro tipoRadar
export const useStats = (tipoRadar = 'parlamento') => {
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
        // ✅ PASSAR o tipoRadar como parâmetro
        const data = await getStats(tipoRadar);
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
  }, [tipoRadar]); // ✅ ADICIONAR tipoRadar nas dependências

  return { stats, loading };
};

