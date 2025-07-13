import { z } from 'zod';

export const CartProductSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
});

export const CartSchema = z.object({
  id: z.number(),
  userId: z.number(),
  date: z.string(),
  products: z.array(CartProductSchema),
});

export type Cart = z.infer<typeof CartSchema>;
export const CartsSchema = z.array(CartSchema);
export type Carts = z.infer<typeof CartsSchema>;
