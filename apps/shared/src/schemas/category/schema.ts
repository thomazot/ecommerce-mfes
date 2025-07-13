import { z } from 'zod';

export const CategorySchema = z.string();
export type Category = z.infer<typeof CategorySchema>;

export const CategoriesSchema = z.array(CategorySchema);
export type Categories = z.infer<typeof CategoriesSchema>;
