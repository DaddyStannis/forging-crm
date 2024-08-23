import { IClient, IOrder } from "@/interfaces";
import { OrderLine } from "@/valueObjects";
import { ObjectId } from "@mikro-orm/mongodb";

export class Order implements IOrder {
  _id!: ObjectId;
  createdAt!: Date;
  updatedAt!: Date;
  readonly lines: OrderLine[] = [];

  constructor(public readonly client: IClient) {}
}
