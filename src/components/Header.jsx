import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { BellIcon as BellSolidIcon } from "@heroicons/react/24/solid";

const Header = ({
  ultimaAtualizacao,
  notificationEnabled,
  onToggleNotifications,
  onRefresh,
  isRefreshing,
}) => {
  return (
    <header className="rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Logo e Título */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl blur-xl opacity-60 animate-pulse"></div>
            <div className="relative">
              <img
                src="/dedalo.png"
                alt="Dédalo Logo"
                className="w-32 h-16 object-contain"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              RADAR LEGISLATIVO
            </h1>
            <p className="text-sm text-emerald-300 font-semibold tracking-wide">
              Sistema de Monitorização em Tempo Real
            </p>
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-3">
          {/* Status */}
          {ultimaAtualizacao && (
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400"></div>
              <span className="text-xs text-emerald-300 font-semibold">
                Atualizado{" "}
                {new Date(ultimaAtualizacao).toLocaleTimeString("pt-PT")}
              </span>
            </div>
          )}

          <button
            onClick={onOpenConfig} // ← nova prop
            className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/30 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <Cog6ToothIcon className="w-5 h-5 text-emerald-300" />
          </button>
          {/* Botão Refresh */}
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/30 transition-all group backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20"
            title="Atualizar dados"
          >
            <ArrowPathIcon
              className={`w-5 h-5 text-emerald-300 ${
                isRefreshing
                  ? "animate-spin"
                  : "group-hover:rotate-180 transition-transform duration-500"
              }`}
            />
          </button>

          {/* Botão Pesquisa */}
          <button className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/30 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20">
            <MagnifyingGlassIcon className="w-5 h-5 text-emerald-300" />
          </button>

          {/* Botão Notificações */}
          <button
            onClick={onToggleNotifications}
            className={`p-3 rounded-xl border transition-all backdrop-blur-sm ${
              notificationEnabled
                ? "bg-emerald-500/20 border-emerald-400/50 shadow-xl shadow-emerald-500/30"
                : "bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/20"
            }`}
            title={
              notificationEnabled
                ? "Notificações ativadas"
                : "Ativar notificações"
            }
          >
            {notificationEnabled ? (
              <BellSolidIcon className="w-5 h-5 text-emerald-300 animate-pulse" />
            ) : (
              <BellIcon className="w-5 h-5 text-emerald-300" />
            )}
          </button>

          {/* Botão Configurações */}
          <button className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/30 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20">
            <Cog6ToothIcon className="w-5 h-5 text-emerald-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
