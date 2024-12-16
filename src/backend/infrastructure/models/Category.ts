import { ICategory } from "@/backend/domain";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema<ICategory>({
  name: { type: String, unique: true },
});

export const Category = mongoose.model("Category", categorySchema);
