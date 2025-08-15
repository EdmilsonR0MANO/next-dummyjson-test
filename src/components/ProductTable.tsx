"use client";

import { Product } from "@/lib/types";
import { formatCategoryLabel } from "@/lib/category-utils";
import { useState } from "react";

interface Props {
  products: Product[];
  onSelect: (ids: number[]) => void;
  onSort?: (field: string) => void;
}

export function ProductTable({ products, onSelect, onSort }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    const newSelected = selected.includes(id)
      ? selected.filter((x) => x !== id)
      : [...selected, id];
    setSelected(newSelected);
    onSelect(newSelected);
  };

  const toggleAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
      onSelect([]);
    } else {
      const allIds = products.map(p => p.id);
      setSelected(allIds);
      onSelect(allIds);
    }
  };

        return (
      <>
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    checked={selected.length === products.length && products.length > 0}
                    onChange={toggleAll}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    aria-label="Selecionar todos os produtos"
                  />
                </th>
                <th className="p-4 text-left font-semibold text-lg">Imagem</th>
                <th 
                  className="p-4 text-left cursor-pointer hover:bg-blue-700 transition-colors font-semibold text-lg"
                  onClick={() => onSort?.('title')}
                >
                  Nome
                </th>
                <th className="p-4 text-left font-semibold text-lg">Categoria</th>
                <th 
                  className="p-4 text-left cursor-pointer hover:bg-blue-700 transition-colors font-semibold text-lg"
                  onClick={() => onSort?.('price')}
                >
                  Preço
                </th>
                <th 
                  className="p-4 text-left cursor-pointer hover:bg-blue-700 transition-colors font-semibold text-lg"
                  onClick={() => onSort?.('rating')}
                >
                  Rating
                </th>
                <th className="p-4 text-left font-semibold text-lg">Estoque</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((p, index) => (
                <tr key={p.id} className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-4 border-b border-gray-200">
                    <input
                      type="checkbox"
                      checked={selected.includes(p.id)}
                      onChange={() => toggle(p.id)}
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      aria-label={`Selecionar produto ${p.title}`}
                    />
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.thumbnail} alt={p.title} className="w-20 h-20 object-cover rounded-lg shadow-lg border-2 border-gray-100" />
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <div className="font-semibold text-gray-900 text-base leading-tight">
                      {p.title}
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-sm">
                      {formatCategoryLabel(p.category)}
                    </span>
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 rounded-lg border border-green-200">
                      <span className="font-bold text-green-700 text-lg">R$ {p.price.toFixed(2)}</span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <div className="flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 px-3 py-1.5 rounded-lg border border-yellow-200">
                      <span className="text-yellow-500 mr-2 text-lg">★</span>
                      <span className="font-bold text-gray-900 text-sm">{p.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold border shadow-sm ${
                      p.stock > 50 ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200' :
                      p.stock > 20 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200' :
                      'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200'
                    }`}>
                      {p.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3 sm:space-y-4">
          {products.map((p, index) => (
            <div key={p.id} className={`bg-white rounded-lg border border-gray-200 shadow-sm p-3 sm:p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => toggle(p.id)}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    aria-label={`Selecionar produto ${p.title}`}
                  />
                </div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.thumbnail} alt={p.title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg shadow-sm border border-gray-200" />
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-1 sm:mb-2 break-words">
                    {p.title}
                  </h3>
                  
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="text-gray-500">Cat:</span>
                      <span className="inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                        {formatCategoryLabel(p.category)}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="text-gray-500">R$:</span>
                      <span className="font-bold text-green-700 text-sm sm:text-base">R$ {p.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="text-gray-500">★:</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-bold text-gray-900">{p.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="text-gray-500">Est:</span>
                      <span className={`inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold border ${
                        p.stock > 50 ? 'bg-green-100 text-green-800 border-green-200' :
                        p.stock > 20 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        'bg-red-100 text-red-800 border-red-200'
                      }`}>
                        {p.stock}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
  );
}
