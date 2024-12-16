import { ProductRepository } from "@/backend/application";
import { IProduct } from "@/backend/domain";
import { Product } from "../models";

export class MongooseProductRepository extends ProductRepository {
  async add(product: IProduct): Promise<void> {
    const newProduct = new Product();
    await newProduct.save();
  }

  async save(product: IProduct): Promise<void> {
    await Product.findOneAndUpdate({ sku: product.sku }, product, {
      new: true,
      upsert: true,
    });
  }

  async getBySku(sku: string): Promise<IProduct | null> {
    const product = await Product.findOne({ sku });
    return product ? product.toObject() : null;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await Product.find();
    return products.map((product) => product.toObject());
  }

  async delete(product: IProduct): Promise<void> {
    await Product.deleteOne({ sku: product.sku });
  }
}
