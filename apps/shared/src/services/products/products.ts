import {
  ProductSchema,
  ProductsSchema,
  Product,
  Products,
} from '../../schemas/products/schema';
import { CategoriesSchema, Categories } from '../../schemas/category/schema';

const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async (): Promise<Products> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: unknown = await res.json();
  return ProductSchema.parse(data);
};

export const fetchCategories = async (): Promise<Categories> => {
  const res = await fetch(`${BASE_URL}/categories`);
  const data: unknown = await res.json();
  return CategoriesSchema.parse(data);
};

export const fetchProductsByCategory = async (
  category: string,
): Promise<Products> => {
  const res = await fetch(
    `${BASE_URL}/category/${encodeURIComponent(category)}`,
  );
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};
