import mongoose from "mongoose";
import { IProduct, Material } from "@/backend/domain";

const productSchema = new mongoose.Schema<IProduct>({
  sku: { type: String, required: true, unique: true },
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  thickness: { type: Number, required: true },
  diameter: { type: Number, required: true },
  weight: { type: Number, required: true },
  price: { type: Number, required: true },
  material: { type: String, enum: Object.values(Material) },
  qty: { type: Number, default: 0 },
  imgSrc: { type: String, default: null },
});

export const Product = mongoose.model("Product", productSchema);
