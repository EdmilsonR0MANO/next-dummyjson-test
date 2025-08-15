export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}
  