interface Props {
  value: number;
  onChange: (value: number) => void;
}

const ITEMS_PER_PAGE_OPTIONS = [5, 8, 10, 15, 20];

export function ItemsPerPageSelector({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <label htmlFor="items-per-page" className="text-sm font-semibold text-blue-800 whitespace-nowrap">
          Mostrar:
        </label>
      </div>
      <select
        id="items-per-page"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm transition-all duration-200 text-blue-900 text-sm font-medium hover:border-blue-400 cursor-pointer bg-gradient-to-r from-white to-blue-50"
        aria-label="Selecionar quantidade de itens por página"
      >
        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="text-sm font-medium text-blue-700 whitespace-nowrap">
        itens por página
      </span>
    </div>
  );
} 