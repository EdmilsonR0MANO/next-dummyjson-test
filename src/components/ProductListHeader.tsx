interface ProductListHeaderProps {
  totalProducts: number;
}

export function ProductListHeader({ totalProducts }: ProductListHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 sm:pb-6 gap-2 sm:gap-4">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2 break-words">Lista de Produtos</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words">Gerencie seus produtos de forma eficiente</p>
      </div>
      <div className="text-center sm:text-right flex-shrink-0">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
          {totalProducts}
        </div>
        <div className="text-xs text-gray-500">produtos cadastrados</div>
      </div>
    </div>
  );
} 