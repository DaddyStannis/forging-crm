import { CategoryRepository } from "@/backend/application";
import { ICategory } from "@/backend/domain";
import { Category } from "../models";

export class MongooseCategoryRepository extends CategoryRepository {
  constructor() {
    super();
  }

  async add(category: ICategory): Promise<void> {
    const newCategory = new Category(category);
    await newCategory.save();
  }

  async save(category: ICategory): Promise<void> {
    await Category.findOneAndUpdate({ name: category.name }, category, {
      new: true,
      upsert: true,
    });
  }

  async getByName(name: string): Promise<ICategory | null> {
    const category = await Category.findOne({ name });
    return category ? category.toObject() : null;
  }

  async getAll(): Promise<ICategory[]> {
    const categories = await Category.find();
    return categories.map((category) => category.toObject());
  }

  async delete(category: ICategory): Promise<void> {
    await Category.deleteOne({ name: category.name });
  }
}
