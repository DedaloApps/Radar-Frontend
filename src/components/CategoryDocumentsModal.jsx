import {
  XMarkIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  DocumentTextIcon,
  FunnelIcon,
  ArrowsUpDownIcon,
  CheckIcon,
  ArchiveBoxIcon,
  EyeSlashIcon,
  StarIcon,
  EyeIcon,
  BuildingOfficeIcon,
  Square2StackIcon, // ✅ Para selecionar todos
} from "@heroicons/react/24/outline";
import { CheckIcon as CheckIconSolid } from "@heroicons/react/24/solid"; // ✅ Para checkbox preenchido
import { useState, useMemo } from "react";
import { useUser } from "../contexts/UserContext";

const CategoryDocumentsModal = ({ 
  category, 
  onClose, 
  onSelectDocument, 
  viewMode,
  filtros,
  setFiltros
}) => {
  // ✅ ESTADOS EXISTENTES
  const {
    searchTerm,
    sortOrder,
    tipoFiltro,
    fonteFiltro,
    entidadesFiltro,
    dataInicio,
    dataFim,
    mostrarArquivados
  } = filtros;

  // ✅ NOVOS ESTADOS PARA SELEÇÃO MÚLTIPLA
  const [documentosSelecionados, setDocumentosSelecionados] = useState([]);

  const updateFiltro = (key, value) => {
    setFiltros(prev => ({ ...prev, [key]: value }));
  };

  const CORES_PARTIDOS = {
    'PSD': '#FF6600',
    'PS': '#FF69B4',
    'Chega': '#1E3A8A',
    'IL': '#00BCD4',
    'BE': '#8B0000',
    'PCP': '#DC143C',
    'Livre': '#32CD32',
    'CDS-PP': '#0066CC',
    'PAN': '#4CAF50',
  };

  const CORES_CONCERTACAO = {
    'CGTP-IN': '#DC143C',
    'UGT': '#FF8C00',
    'CAP': '#228B22',
    'CCP': '#4169E1',
    'CTP': '#9370DB',
  };

  const getCorPartido = (entidade) => {
    if (category.id === 'stake_partidos') {
      const nomePartido = entidade?.split(' - ')[0]?.trim();
      return CORES_PARTIDOS[nomePartido] || 'rgba(39, 170, 226, 0.2)';
    }
    
    if (category.id === 'stake_concertacao') {
      return CORES_CONCERTACAO[entidade] || 'rgba(39, 170, 226, 0.2)';
    }
    
    return 'rgba(39, 170, 226, 0.2)';
  };

  const {
    foiLido,
    marcarComoLido,
    marcarComoNaoLido,
    estaArquivado,
    arquivarDocumento,
    restaurarDocumento,
    toggleFavorito,
    eFavorito,
  } = useUser();

  const { id, info, docs } = category;
  const Icon = info.icon;

  const tiposDisponiveis = useMemo(() => {
    const tipos = [
      ...new Set(docs.map((d) => d.tipo_conteudo).filter(Boolean)),
    ];
    return tipos;
  }, [docs]);

  const fontesDisponiveis = useMemo(() => {
    const fontes = [
      ...new Set(docs.map((d) => d.fonte).filter(Boolean)),
    ];
    return fontes.sort();
  }, [docs]);

  const entidadesDisponiveis = useMemo(() => {
    if (viewMode !== 'stakeholders') return [];
    const entidades = [
      ...new Set(docs.map((d) => d.entidades).filter(Boolean)),
    ];
    return entidades.sort();
  }, [docs, viewMode]);

  const documentosFiltrados = useMemo(() => {
    let resultado = [...docs];

    if (!mostrarArquivados) {
      resultado = resultado.filter((doc) => !estaArquivado(doc.id));
    } else {
      resultado = resultado.filter((doc) => estaArquivado(doc.id));
    }

    if (searchTerm) {
      resultado = resultado.filter((doc) =>
        doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (tipoFiltro !== "todos") {
      resultado = resultado.filter((doc) => doc.tipo_conteudo === tipoFiltro);
    }

    if (fonteFiltro !== "todos") {
      resultado = resultado.filter((doc) => doc.fonte === fonteFiltro);
    }

    if (entidadesFiltro.length > 0) {
      resultado = resultado.filter((doc) => entidadesFiltro.includes(doc.entidades));
    }

    if (dataInicio) {
      resultado = resultado.filter((doc) => {
        const docDate = new Date(doc.data_publicacao);
        return docDate >= new Date(dataInicio);
      });
    }

    if (dataFim) {
      resultado = resultado.filter((doc) => {
        const docDate = new Date(doc.data_publicacao);
        return docDate <= new Date(dataFim);
      });
    }

    resultado.sort((a, b) => {
      const dateA = new Date(a.data_publicacao || a.created_at);
      const dateB = new Date(b.data_publicacao || b.created_at);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    return resultado;
  }, [
    docs,
    searchTerm,
    sortOrder,
    tipoFiltro,
    fonteFiltro,
    entidadesFiltro,
    dataInicio,
    dataFim,
    mostrarArquivados,
    estaArquivado,
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-PT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const limparFiltros = () => {
    setFiltros({
      searchTerm: "",
      sortOrder: "desc",
      tipoFiltro: "todos",
      fonteFiltro: "todos",
      entidadesFiltro: [],
      dataInicio: "",
      dataFim: "",
      mostrarArquivados: false
    });
  };

  const toggleEntidade = (entidade) => {
    setFiltros(prev => {
      const novasEntidades = prev.entidadesFiltro.includes(entidade)
        ? prev.entidadesFiltro.filter(e => e !== entidade)
        : [...prev.entidadesFiltro, entidade];
      
      return { ...prev, entidadesFiltro: novasEntidades };
    });
  };

  const marcarTudoComoLido = () => {
    documentosFiltrados.forEach((doc) => {
      if (doc.id) {
        marcarComoLido(doc.id);
      }
    });
  };

  // ✅ FUNÇÕES DE SELEÇÃO MÚLTIPLA
  const toggleSelecaoDocumento = (docId, e) => {
    e.stopPropagation(); // Evitar abrir o documento
    setDocumentosSelecionados(prev => {
      if (prev.includes(docId)) {
        return prev.filter(id => id !== docId);
      } else {
        return [...prev, docId];
      }
    });
  };

  const selecionarTodos = () => {
    const todosIds = documentosFiltrados.map(doc => doc.id);
    setDocumentosSelecionados(todosIds);
  };

  const desselecionarTodos = () => {
    setDocumentosSelecionados([]);
  };

  const todosSelecionados = documentosFiltrados.length > 0 && 
    documentosSelecionados.length === documentosFiltrados.length;

  // ✅ AÇÕES EM LOTE
  const arquivarSelecionados = () => {
    if (documentosSelecionados.length === 0) return;
    
    // Confirmação se forem muitos
    if (documentosSelecionados.length > 10) {
      if (!window.confirm(`Tens certeza que queres arquivar ${documentosSelecionados.length} documentos?`)) {
        return;
      }
    }
    
    documentosSelecionados.forEach(docId => arquivarDocumento(docId));
    setDocumentosSelecionados([]);
  };

  const marcarSelecionadosComoLidos = () => {
    if (documentosSelecionados.length === 0) return;
    documentosSelecionados.forEach(docId => marcarComoLido(docId));
    setDocumentosSelecionados([]);
  };

  const favoritarSelecionados = () => {
    if (documentosSelecionados.length === 0) return;
    documentosSelecionados.forEach(docId => toggleFavorito(docId));
    setDocumentosSelecionados([]);
  };

  const naoLidos = docs.filter(
    (doc) => !foiLido(doc.id) && !estaArquivado(doc.id)
  ).length;
  const totalArquivados = docs.filter((doc) => estaArquivado(doc.id)).length;

  const filtrosAtivos =
    searchTerm || tipoFiltro !== "todos" || fonteFiltro !== "todos" || entidadesFiltro.length > 0 || dataInicio || dataFim;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border overflow-hidden flex flex-col"
        style={{
          backgroundColor: '#0f172a',
          borderColor: 'rgba(100, 116, 139, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b flex-shrink-0"
             style={{
               backgroundColor: 'rgba(38, 34, 97, 0.5)',
               borderColor: 'rgba(100, 116, 139, 0.5)'
             }}>
          <div className="p-6 pr-16">
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl"
                     style={{ backgroundColor: 'rgba(38, 34, 97, 0.8)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#27aae2' }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {info.nomeCompleto || info.nome}
                  </h2>
                  <p className="text-sm text-slate-400">
                    {documentosFiltrados.length} de{" "}
                    {docs.length - totalArquivados}{" "}
                    {documentosFiltrados.length === 1 ? "documento" : "documentos"}
                    {naoLidos > 0 && !mostrarArquivados && (
                      <span className="ml-2 text-red-400">
                        • {naoLidos} {naoLidos === 1 ? "novo" : "novos"}
                      </span>
                    )}
                    {totalArquivados > 0 && (
                      <span className="ml-2 text-slate-500">
                        • {totalArquivados} arquivado{totalArquivados !== 1 ? "s" : ""}
                      </span>
                    )}
                    {/* ✅ CONTADOR DE SELECIONADOS */}
                    {documentosSelecionados.length > 0 && (
                      <span className="ml-2 font-semibold" style={{ color: '#27aae2' }}>
                        • {documentosSelecionados.length} selecionado{documentosSelecionados.length !== 1 ? 's' : ''}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {totalArquivados > 0 && (
                  <button
                    onClick={() => updateFiltro('mostrarArquivados', !mostrarArquivados)}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                      mostrarArquivados
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-slate-600"
                    }`}
                  >
                    <ArchiveBoxIcon className="w-4 h-4" />
                    {mostrarArquivados ? "Ver Ativos" : `Ver Arquivados (${totalArquivados})`}
                  </button>
                )}

                {!mostrarArquivados && naoLidos > 0 && (
                  <button
                    onClick={marcarTudoComoLido}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                  >
                    <CheckIcon className="w-4 h-4" />
                    Marcar Todos como Lido
                  </button>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
          </button>
        </div>

        {/* Filtros + Seleção */}
        {docs.length > 0 && (
          <div className="p-4 space-y-3 border-b flex-shrink-0"
               style={{
                 backgroundColor: 'rgba(38, 34, 97, 0.3)',
                 borderColor: 'rgba(100, 116, 139, 0.5)'
               }}>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Pesquisar documentos..."
                  value={searchTerm}
                  onChange={(e) => updateFiltro('searchTerm', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                onClick={() => updateFiltro('sortOrder', sortOrder === "desc" ? "asc" : "desc")}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <ArrowsUpDownIcon className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {sortOrder === "desc" ? "Recente" : "Antigo"}
                </span>
              </button>

              {/* ✅ BOTÃO SELECIONAR TODOS / DESSELECIONAR */}
              <button
                onClick={todosSelecionados ? desselecionarTodos : selecionarTodos}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-all"
                style={{
                  backgroundColor: todosSelecionados ? 'rgba(39, 170, 226, 0.15)' : 'rgb(30, 41, 59)',
                  borderColor: todosSelecionados ? 'rgba(39, 170, 226, 0.5)' : 'rgb(51, 65, 85)',
                  color: todosSelecionados ? '#27aae2' : 'rgb(148, 163, 184)'
                }}
              >
                <Square2StackIcon className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {todosSelecionados ? 'Desselecionar' : 'Selecionar Todos'}
                </span>
              </button>

              {/* ✅ AÇÕES EM LOTE (só aparecem se houver seleção) */}
              {documentosSelecionados.length > 0 && (
                <>
                  {/* Marcar como Lido */}
                  <button
                    onClick={marcarSelecionadosComoLidos}
                    className="p-2 bg-slate-800 hover:bg-green-500/20 hover:border-green-500/50 rounded-lg transition-all border border-slate-700"
                    title="Marcar selecionados como lidos"
                  >
                    <EyeIcon className="w-5 h-5 text-slate-400 hover:text-green-400 transition-colors" />
                  </button>

                  {/* Favoritar */}
                  <button
                    onClick={favoritarSelecionados}
                    className="p-2 bg-slate-800 hover:bg-amber-500/20 hover:border-amber-500/50 rounded-lg transition-all border border-slate-700"
                    title="Favoritar selecionados"
                  >
                    <StarIcon className="w-5 h-5 text-slate-400 hover:text-amber-400 transition-colors" />
                  </button>

                  {/* Arquivar */}
                  <button
                    onClick={arquivarSelecionados}
                    className="p-2 bg-slate-800 hover:bg-red-500/20 hover:border-red-500/50 rounded-lg transition-all border border-slate-700"
                    title="Arquivar selecionados"
                  >
                    <ArchiveBoxIcon className="w-5 h-5 text-slate-400 hover:text-red-400 transition-colors" />
                  </button>
                </>
              )}
            </div>

            {/* FILTRO DE ENTIDADES */}
            {viewMode === 'stakeholders' && entidadesDisponiveis.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    <span>Filtrar por Entidade:</span>
                  </div>
                  {entidadesFiltro.length > 0 && (
                    <button
                      onClick={() => updateFiltro('entidadesFiltro', [])}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      Limpar ({entidadesFiltro.length})
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {entidadesDisponiveis.map((entidade) => {
                    const isSelected = entidadesFiltro.includes(entidade);
                    const corPartido = getCorPartido(entidade);

                    return (
                      <button
                        key={entidade}
                        onClick={() => toggleEntidade(entidade)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all border-2 ${
                          isSelected
                            ? "text-white border-transparent shadow-lg scale-105"
                            : "text-slate-400 bg-slate-800/50 border-slate-700 hover:text-white hover:border-slate-600 hover:bg-slate-800"
                        }`}
                        style={
                          isSelected
                            ? {
                                background: corPartido,
                                boxShadow: `0 4px 20px ${corPartido}66, 0 0 0 3px ${corPartido}1A`
                              }
                            : {}
                        }
                      >
                        <span className="flex items-center gap-1.5">
                          {isSelected && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                          {entidade}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {entidadesFiltro.length > 0 && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">A mostrar:</span>
                    <div className="flex flex-wrap gap-1">
                      {entidadesFiltro.map((entidade) => (
                        <span
                          key={entidade}
                          className="px-2 py-0.5 rounded text-white font-medium"
                          style={{ backgroundColor: getCorPartido(entidade) }}
                        >
                          {entidade}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {tiposDisponiveis.length > 0 && (
                <select
                  value={tipoFiltro}
                  onChange={(e) => updateFiltro('tipoFiltro', e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none transition-colors hover:border-slate-600"
                >
                  <option value="todos">Todos os tipos</option>
                  {tiposDisponiveis.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </option>
                  ))}
                </select>
              )}

              {fontesDisponiveis.length > 0 && (
                <select
                  value={fonteFiltro}
                  onChange={(e) => updateFiltro('fonteFiltro', e.target.value)}
                  className="px-3 py-2 border rounded-lg text-sm text-white focus:outline-none transition-all hover:border-slate-600"
                  style={{
                    backgroundColor: fonteFiltro !== "todos" ? 'rgba(39, 170, 226, 0.15)' : 'rgb(30, 41, 59)',
                    borderColor: fonteFiltro !== "todos" ? 'rgba(39, 170, 226, 0.5)' : 'rgb(51, 65, 85)',
                  }}
                >
                  <option value="todos">Todas as fontes</option>
                  {fontesDisponiveis.map((fonte) => (
                    <option key={fonte} value={fonte}>
                      {fonte}
                    </option>
                  ))}
                </select>
              )}

              <div className="relative">
                <label className="absolute -top-2 left-2 px-1 text-xs text-slate-500"
                       style={{ backgroundColor: 'rgba(38, 34, 97, 0.3)' }}>
                  De
                </label>
                <input
                  type="date"
                  value={dataInicio}
                  onChange={(e) => updateFiltro('dataInicio', e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-2 left-2 px-1 text-xs text-slate-500"
                       style={{ backgroundColor: 'rgba(38, 34, 97, 0.3)' }}>
                  Até
                </label>
                <input
                  type="date"
                  value={dataFim}
                  onChange={(e) => updateFiltro('dataFim', e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {filtrosAtivos && (
                <button
                  onClick={limparFiltros}
                  className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        )}

        {/* Lista */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 #1e293b" }}>
          {documentosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              {mostrarArquivados ? (
                <ArchiveBoxIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              ) : (
                <FunnelIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              )}
              <p className="text-slate-500 text-sm">
                {mostrarArquivados ? "Nenhum documento arquivado" : filtrosAtivos ? "Nenhum documento encontrado" : "Sem documentos"}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-700/50">
              {documentosFiltrados.map((doc, index) => {
                const isNew = !foiLido(doc.id);
                const isArchived = estaArquivado(doc.id);
                const isSelected = documentosSelecionados.includes(doc.id);

                return (
                  <div 
                    key={index} 
                    className={`group relative transition-all ${
                      isSelected 
                        ? 'bg-slate-800/80 ring-2 ring-inset' 
                        : 'hover:bg-slate-800/50'
                    }`}
                    style={isSelected ? { ringColor: '#27aae2' } : {}}
                  >
                    <div className="flex items-start gap-3 p-4">
                      {/* ✅ CHECKBOX DE SELEÇÃO */}
                      <button
                        onClick={(e) => toggleSelecaoDocumento(doc.id, e)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-transparent'
                            : 'border-slate-600 hover:border-slate-500'
                        }`}
                        style={isSelected ? { backgroundColor: '#27aae2' } : {}}
                      >
                        {isSelected && (
                          <CheckIconSolid className="w-4 h-4 text-white" />
                        )}
                      </button>

                      {/* CONTEÚDO DO DOCUMENTO */}
                      <button 
                        onClick={() => onSelectDocument(doc)} 
                        className="flex-1 text-left flex items-start gap-3"
                      >
                        <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors flex-shrink-0">
                          <DocumentTextIcon className="w-4 h-4 text-slate-400 transition-colors group-hover:text-sky-300" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-2">
                            <h3 className="font-medium text-sm text-white group-hover:text-sky-300 transition-colors line-clamp-2 flex-1">
                              {doc.titulo}
                            </h3>
                            {isNew && !isArchived && (
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1.5 animate-pulse"></div>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-md text-slate-300 font-medium">
                              <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
                              {formatDate(doc.data_publicacao || doc.createdAt)}
                            </span>

                            {doc.entidades && (
                              <span 
                                className="px-2.5 py-1 rounded-md text-white font-medium text-xs shadow-sm"
                                style={{ 
                                  backgroundColor: getCorPartido(doc.entidades),
                                  boxShadow: `0 0 10px ${getCorPartido(doc.entidades)}33`
                                }}
                              >
                                {(() => {
                                  if (doc.categoria === 'stake_partidos' && doc.entidades?.includes('|')) {
                                    const [partido, fonte] = doc.entidades.split('|');
                                    return `${partido} - ${fonte}`;
                                  }
                                  return doc.entidades;
                                })()}
                              </span>
                            )}

                            {doc.tipo_conteudo && (
                              <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 rounded-md text-slate-400">
                                {doc.tipo_conteudo}
                              </span>
                            )}

                            {doc.numero && (
                              <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 rounded-md text-slate-500">
                                Nº {doc.numero}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>

                      {/* AÇÕES INDIVIDUAIS (só aparecem no hover se não estiver selecionado) */}
                      {!isSelected && (
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                          {!isNew && !isArchived && (
                            <button
                              onClick={(e) => { e.stopPropagation(); marcarComoNaoLido(doc.id); }}
                              className="p-2 bg-slate-800 hover:bg-blue-500/20 hover:border-blue-500/50 rounded-lg transition-all border border-transparent"
                              title="Marcar como não lido"
                            >
                              <EyeIcon className="w-4 h-4 text-slate-400 hover:text-blue-400 transition-colors" />
                            </button>
                          )}

                          <button
                            onClick={(e) => { e.stopPropagation(); toggleFavorito(doc.id); }}
                            className={`p-2 rounded-lg transition-all ${eFavorito(doc.id) ? "bg-amber-500/20 hover:bg-amber-500/30" : "bg-slate-800 hover:bg-slate-700"}`}
                            title={eFavorito(doc.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                          >
                            <StarIcon className={`w-4 h-4 ${eFavorito(doc.id) ? "text-amber-400 fill-amber-400" : "text-slate-400"}`} />
                          </button>

                          <button
                            onClick={(e) => { e.stopPropagation(); isArchived ? restaurarDocumento(doc.id) : arquivarDocumento(doc.id); }}
                            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                            title={isArchived ? "Restaurar" : "Arquivar"}
                          >
                            {isArchived ? (
                              <EyeSlashIcon className="w-4 h-4" style={{ color: '#27aae2' }} />
                            ) : (
                              <ArchiveBoxIcon className="w-4 h-4 text-slate-400 hover:text-red-400" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDocumentsModal;
