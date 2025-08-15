"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Category } from "@/lib/types";

async function fetchCategories() {
  const res = await api.get<Category[]>("/products/categories");
  return res.data;
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
