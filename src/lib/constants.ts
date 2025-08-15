export const PRODUCTS_PER_PAGE = 10;

export const SORT_FIELDS = {
  TITLE: "title",
  PRICE: "price",
  RATING: "rating",
  STOCK: "stock",
} as const;

export const SORT_ORDERS = {
  ASC: "asc",
  DESC: "desc",
} as const;

export const DEFAULT_SORT = {
  field: SORT_FIELDS.TITLE,
  order: SORT_ORDERS.ASC,
} as const;

export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCTS_SEARCH: "/products/search",
  PRODUCTS_CATEGORY: "/products/category",
  CATEGORIES: "/products/categories",
} as const; 