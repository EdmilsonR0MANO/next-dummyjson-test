import { useState, useCallback } from "react";

interface ProductFilters {
  page: number;
  search: string;
  category: string;
  sortBy: string;
  order: "asc" | "desc";
  itemsPerPage: number;
}

export function useProductFilters() {
  const [filters, setFilters] = useState<ProductFilters>({
    page: 1,
    search: "",
    category: "",
    sortBy: "title",
    order: "asc",
    itemsPerPage: 10,
  });

  const updateFilter = useCallback((key: keyof ProductFilters, value: ProductFilters[keyof ProductFilters]) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      // Reset page when changing search, category, or sort
      ...(key !== "page" && { page: 1 }),
    }));
  }, []);

  const setPage = useCallback((page: number) => {
    updateFilter("page", page);
  }, [updateFilter]);

  const setSearch = useCallback((search: string) => {
    setFilters(prev => ({
      ...prev,
      search,
      // Manter categoria selecionada - busca funciona dentro da categoria
      page: 1,
    }));
  }, []);

  const setCategory = useCallback((category: string) => {
    updateFilter("category", category);
  }, [updateFilter]);

  const setSort = useCallback((field: string) => {
    setFilters(prev => ({
      ...prev,
      sortBy: field,
      order: prev.sortBy === field && prev.order === "asc" ? "desc" : "asc",
      page: 1,
    }));
  }, []);

  const setItemsPerPage = useCallback((itemsPerPage: number) => {
    setFilters(prev => ({
      ...prev,
      itemsPerPage,
      page: 1,
    }));
  }, []);

  return {
    filters,
    setPage,
    setSearch,
    setCategory,
    setSort,
    setItemsPerPage,
  };
} 