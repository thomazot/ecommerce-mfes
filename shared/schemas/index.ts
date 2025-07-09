import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string().url(),
  stock: z.number(),
});
export type Product = z.infer<typeof ProductSchema>;

export const CartItemSchema = z.object({
  product: ProductSchema,
  quantity: z.number().min(1),
});
export type CartItem = z.infer<typeof CartItemSchema>;

export const CheckoutSchema = z.object({
  items: z.array(CartItemSchema),
  total: z.number(),
  customer: z.object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
  }),
  payment: z.object({
    method: z.enum(["credit_card", "pix", "boleto"]),
    status: z.enum(["pending", "paid", "failed"]),
  }),
});
export type Checkout = z.infer<typeof CheckoutSchema>; 