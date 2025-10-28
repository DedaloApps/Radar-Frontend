import { useState, useEffect, useCallback } from 'react';
import { getDocuments, searchDocuments } from '../services/api';

// ✅ ADICIONAR o parâmetro tipoRadar
export const useDocuments = (tipoRadar = 'parlamento') => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchDocuments = useCallback(async () => {
  setLoading(true);
  setError(null);
  try {
    let data;
    
    // ✅ DEBUG FRONTEND
    console.log('🔍 useDocuments - fetchDocuments chamado:');
    console.log('tipoRadar:', tipoRadar);
    console.log('searchQuery:', searchQuery);
    console.log('selectedCategoria:', selectedCategoria);
    
    if (searchQuery) {
      data = await searchDocuments(searchQuery);
    } else {
      const params = {
        tipo_radar: tipoRadar
      };
      if (selectedCategoria !== 'todas') {
        params.categoria = selectedCategoria;
      }
      
      console.log('Params enviados para API:', params);
      
      data = await getDocuments(params);
      
      console.log('Resposta da API:', data);
      console.log('Total documentos recebidos:', data.data?.length || 0);
      if (data.data && data.data.length > 0) {
        console.log('Primeiro documento:', data.data[0]);
      }
    }
    
    setDocuments(data.data || []);
  } catch (err) {
    setError(err.message);
    console.error('Erro ao buscar documentos:', err);
  } finally {
    setLoading(false);
  }
}, [selectedCategoria, searchQuery, tipoRadar]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  // Auto-refresh a cada 5 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchDocuments();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchDocuments]);

  return {
    documents,
    loading,
    error,
    selectedCategoria,
    setSelectedCategoria,
    searchQuery,
    setSearchQuery,
    refetch: fetchDocuments
  };
};
