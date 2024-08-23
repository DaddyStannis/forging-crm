import { ObjectId } from "@mikro-orm/mongodb";
import { IOrderLine } from "@/interfaces";

export class OrderLine implements IOrderLine {
  constructor(public readonly productID: ObjectId, public qty: number = 1) {}
}
