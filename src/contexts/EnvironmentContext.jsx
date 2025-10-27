import { createContext, useContext, useState, useEffect } from 'react';
import { COMISSOES, STAKEHOLDERS } from '../utils/categories';

const EnvironmentContext = createContext();

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext);
  if (!context) {
    throw new Error('useEnvironment deve ser usado dentro de EnvironmentProvider');
  }
  return context;
};

export const EnvironmentProvider = ({ children }) => {
  // Estado do ambiente ('parlamento' ou 'stakeholders')
  const [ambiente, setAmbiente] = useState('parlamento');

  // Carregar ambiente do localStorage
  useEffect(() => {
    const savedAmbiente = localStorage.getItem('radar_ambiente');
    if (savedAmbiente && ['parlamento', 'stakeholders'].includes(savedAmbiente)) {
      setAmbiente(savedAmbiente);
    }
  }, []);

  // Alternar ambiente
  const toggleAmbiente = () => {
    setAmbiente(prev => {
      const novoAmbiente = prev === 'parlamento' ? 'stakeholders' : 'parlamento';
      localStorage.setItem('radar_ambiente', novoAmbiente);
      return novoAmbiente;
    });
  };

  // Obter categorias do ambiente ativo
  const getCategoriasAmbiente = () => {
    return ambiente === 'parlamento'
      ? Object.keys(COMISSOES)
      : Object.keys(STAKEHOLDERS);
  };

  // Obter dados do ambiente ativo
  const getDadosAmbiente = () => {
    return ambiente === 'parlamento' ? COMISSOES : STAKEHOLDERS;
  };

  // Obter nome do ambiente
  const getNomeAmbiente = () => {
    return ambiente === 'parlamento' ? 'Parlamento' : 'Stakeholders';
  };

  return (
    <EnvironmentContext.Provider
      value={{
        ambiente,
        setAmbiente,
        toggleAmbiente,
        getCategoriasAmbiente,
        getDadosAmbiente,
        getNomeAmbiente,
        isParlamento: ambiente === 'parlamento',
        isStakeholders: ambiente === 'stakeholders'
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};
