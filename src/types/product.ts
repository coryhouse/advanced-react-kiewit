import { z } from "zod";

const skuSchema = z.object({
  sku: z.string(),
  size: z.number(),
});

export const productSchema = z.object({
  id: z.number(),
  category: z.string(),
  image: z.string(),
  name: z.string(),
  price: z.number(),
  skus: z.array(skuSchema),
  description: z.string(),
});

export type Product = z.infer<typeof productSchema>;
export type Sku = z.infer<typeof skuSchema>;
