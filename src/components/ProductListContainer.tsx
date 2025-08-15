"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import { useProductFilters } from "@/hooks/useProductFilters";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductTable } from "@/components/ProductTable";
import { Pagination } from "@/components/Pagination";
import { DeleteButton } from "@/components/DeleteButton";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ItemsPerPageSelector } from "@/components/ItemsPerPageSelector";
import { ProductListHeader } from "@/components/ProductListHeader";

export function ProductListContainer() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { filters, setPage, setSearch, setCategory, setSort, setItemsPerPage } = useProductFilters();

  const limit = filters.itemsPerPage;
  const skip = (filters.page - 1) * limit;

  const { data, isLoading } = useProducts({
    limit,
    skip,
    search: filters.search,
    category: filters.category,
    sortBy: filters.sortBy,
    order: filters.order,
  });

  const { data: categories } = useCategories();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <ProductListHeader totalProducts={data?.total || 100} />
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <SearchBar onSearch={setSearch} />
        </div>
        {categories && (
          <div className="w-full sm:w-48 lg:w-56">
            <CategoryFilter categories={categories} onChange={setCategory} />
          </div>
        )}
        <div className="w-full sm:w-auto">
          <DeleteButton ids={selectedIds} />
        </div>
      </div>

      {data && (
        <>
          <ProductTable 
            products={data.products || data} 
            onSelect={setSelectedIds}
            onSort={setSort}
          />
          <div className="flex flex-col lg:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4">
            <div className="order-2 lg:order-1">
              <ItemsPerPageSelector 
                value={filters.itemsPerPage}
                onChange={setItemsPerPage}
              />
            </div>
            <div className="order-1 lg:order-2">
              <Pagination
                page={filters.page}
                total={data.total || 100}
                limit={limit}
                onPageChange={setPage}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
} 