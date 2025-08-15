"use client";

import { useDeleteProduct } from "@/hooks/useDeleteProduct";

interface Props {
  ids: number[];
}

export function DeleteButton({ ids }: Props) {
  const { mutate, isPending } = useDeleteProduct();

  return (
                    <button
                  disabled={ids.length === 0 || isPending}
                  onClick={() => ids.forEach((id) => mutate(id))}
                  className="w-full px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  aria-label={`Excluir ${ids.length} produtos selecionados`}
                  aria-describedby={ids.length === 0 ? "no-selection" : undefined}
                >
      {isPending ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )}
                        <span className="font-semibold text-xs sm:text-sm">Excluir ({ids.length})</span>
      {ids.length === 0 && (
        <span id="no-selection" className="sr-only">
          Nenhum produto selecionado para exclusão
        </span>
      )}
    </button>
  );
}
