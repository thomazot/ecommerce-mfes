import { z } from "zod";

export const CategorySchema = z.enum([
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]);

export const CategoriesSchema = z.array(CategorySchema);

export type Category = z.infer<typeof CategorySchema>;
export type Categories = z.infer<typeof CategoriesSchema>;

export const getCategories = async (): Promise<Categories> => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Erro ao buscar categorias");
  const data = await res.json();
  return CategoriesSchema.parse(data);
};
