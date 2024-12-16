import { z } from "zod";
import { Material } from "@/backend/domain";

export const ProductSchema = z.object({
  sku: z.string(),
  qty: z.number(),
  imgSrc: z.string(),
  width: z.number(),
  height: z.number(),
  diagonal: z.number(),
  thickness: z.number(),
  weight: z.number(),
  diameter: z.number(),
  material: z.enum([Material.STEEL, Material.CUST_IRON]),
  price: z.number(),
  category: z.string(),
});

export const ProductUpdateSchema = ProductSchema.omit({ sku: true }).partial();

export type ProductCreateInput = z.infer<typeof ProductSchema>;

export type ProductUpdateInput = z.infer<typeof ProductUpdateSchema>;
