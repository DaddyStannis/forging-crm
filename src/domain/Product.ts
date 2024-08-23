import { ObjectId } from "@mikro-orm/mongodb";
import { IProduct } from "@/interfaces";

export class Product implements IProduct {
  _id!: ObjectId;

  constructor(public readonly sku: string, public qty: number) {}
}
