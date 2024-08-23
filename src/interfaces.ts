import { ObjectId } from "@mikro-orm/mongodb";

export interface IAddress {
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly street: string;
  readonly postalCode: string;
}

export interface IClient {
  readonly email: string;
  readonly tel: string;
  readonly fname: string;
  readonly lname: string;
  readonly address: IAddress;
  readonly orders: IOrder[];
  readonly fullName: string;
}

export interface IProduct {
  readonly _id: ObjectId;
  readonly sku: string;
  qty: number;
}

export interface IOrderLine {
  readonly productID: ObjectId;
  qty: number;
}

export interface IOrder {
  readonly _id: ObjectId;
  readonly client: IClient;
  readonly lines: IOrderLine[];
}
