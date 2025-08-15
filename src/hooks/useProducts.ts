"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Product } from "@/lib/types";

interface Params {
  limit: number;
  skip: number;
  search?: string;
  category?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

function filterProductsBySearch(products: Product[], searchTerm: string): Product[] {
  const term = searchTerm.toLowerCase().trim();
  return products.filter(product => 
    product.title.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  );
}

async function fetchProducts(params: Params) {
  const { limit, skip, search, category, sortBy, order } = params;

  let url = `/products?limit=${limit}&skip=${skip}`;
  
  // Lógica: Busca dentro da categoria selecionada
  if (search && search.trim() && category && category.trim()) {
    // Busca dentro da categoria específica
    url = `/products/category/${encodeURIComponent(category.trim())}?limit=${limit}&skip=${skip}`;
  } else if (search && search.trim()) {
    // Busca geral (sem categoria)
    url = `/products/search?q=${encodeURIComponent(search.trim())}&limit=${limit}&skip=${skip}`;
  } else if (category && category.trim()) {
    // Apenas categoria (sem busca)
    url = `/products/category/${encodeURIComponent(category.trim())}?limit=${limit}&skip=${skip}`;
  }
  
  if (sortBy) url += `&sortBy=${sortBy}&order=${order ?? "asc"}`;

  const res = await api.get(url);
  const data = res.data;

  // Se há busca e categoria, filtrar no lado cliente
  if (search && search.trim() && category && category.trim()) {
    const filteredProducts = filterProductsBySearch(data.products || data, search.trim());
    return {
      ...data,
      products: filteredProducts,
      total: filteredProducts.length
    };
  }

  return data;
}

export function useProducts(params: Params) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    placeholderData: (previousData) => previousData,
  });
}
