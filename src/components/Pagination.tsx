"use client";

interface Props {
  page: number;
  total: number;
  limit: number;
  onPageChange: (newPage: number) => void;
}

export function Pagination({ page, total, limit, onPageChange }: Props) {
  const totalPages = Math.ceil(total / limit);

  return (
    <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4" aria-label="Navegação de páginas">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
        aria-label="Ir para página anterior"
        aria-disabled={page === 1}
      >
        ← Anterior
      </button>
      <div className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-blue-200 rounded-lg shadow-sm text-center" role="status" aria-live="polite">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">
          Página {page} de {totalPages}
        </span>
      </div>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
        aria-label="Ir para próxima página"
        aria-disabled={page === totalPages}
      >
        Próxima →
      </button>
    </nav>
  );
}
