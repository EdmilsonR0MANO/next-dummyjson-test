"use client";

import { useState, useEffect } from "react";

interface Props {
  onSearch: (value: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value, onSearch]);

  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Buscar produtos
      </label>
                        <input
                    id="search-input"
                    type="text"
                    placeholder="Buscar produto..."
                    aria-label="Buscar produtos por nome"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors text-gray-900 placeholder-gray-500 bg-white text-sm sm:text-base"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" aria-hidden="true">
        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
