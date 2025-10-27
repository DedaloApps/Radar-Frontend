import { useState, useEffect, useCallback } from 'react';
import {
  getDocuments,
  searchDocuments,
  getStakeholdersDocuments,
  searchStakeholdersDocuments
} from '../services/api';

export const useDocuments = (ambiente = 'parlamento') => {
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

      if (searchQuery) {
        data = ambiente === 'parlamento'
          ? await searchDocuments(searchQuery)
          : await searchStakeholdersDocuments(searchQuery);
      } else {
        const params = {};
        if (selectedCategoria !== 'todas') {
          params.categoria = selectedCategoria;
        }
        data = ambiente === 'parlamento'
          ? await getDocuments(params)
          : await getStakeholdersDocuments(params);
      }

      setDocuments(data.data || []);
    } catch (err) {
      setError(err.message);
      console.error('Erro ao buscar documentos:', err);
    } finally {
      setLoading(false);
    }
  }, [selectedCategoria, searchQuery, ambiente]);

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