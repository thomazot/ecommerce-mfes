import { CategoriesSchema, Categories } from '../../schemas/category/schema';

const BASE_URL = 'https://fakestoreapi.com/products/categories';

export const getCategories = async (): Promise<Categories> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return CategoriesSchema.parse(data);
};
