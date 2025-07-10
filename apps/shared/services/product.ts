import { ProductSchema, Product } from "../schemas";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return ProductSchema.array().parse(data);
};

export const getProductById = async (id: string | number): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  return ProductSchema.parse(data);
}; 

export const getProductByCategory = async (category: string ): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return ProductSchema.array().parse(data);
}; 