"use client";

import { Category } from "@/lib/types";
import { formatCategoryLabel } from "@/lib/category-utils";

interface Props {
  categories: Category[];
  onChange: (value: string) => void;
}

export function CategoryFilter({ categories, onChange }: Props) {
  return (
    <div>
      <label htmlFor="category-filter" className="sr-only">
        Filtrar por categoria
      </label>
                        <select
                    id="category-filter"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm transition-colors text-gray-900 text-sm sm:text-base"
                    onChange={(e) => onChange(e.target.value)}
                    aria-label="Filtrar produtos por categoria"
                  >
        <option value="">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
                                    {formatCategoryLabel(category.slug)}
          </option>
        ))}
      </select>
    </div>
  );
}
