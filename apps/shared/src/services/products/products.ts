import { ProductSchema, ProductsSchema } from '../../schemas/products/schema';
import { CategoriesSchema } from '../../schemas/category/schema';

const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async () => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};

export const fetchProductById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: unknown = await res.json();
  return ProductSchema.parse(data);
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  const data: unknown = await res.json();
  return CategoriesSchema.parse(data);
};

export const fetchProductsByCategory = async (category: string) => {
  const res = await fetch(
    `${BASE_URL}/category/${encodeURIComponent(category)}`,
  );
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};
