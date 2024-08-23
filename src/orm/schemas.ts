import { EntitySchema } from "@mikro-orm/mongodb";
import { Client, Order, Product } from "@/domain";
import { Address, OrderLine } from "@/valueObjects";

export const OrderLineSchema = new EntitySchema<OrderLine>({
  class: OrderLine,
  embeddable: true,
  properties: {
    productID: { type: "ObjectId" },
    qty: { type: "int", default: 1 },
  },
});

export const OrderSchema = new EntitySchema<Order>({
  class: Order,
  properties: {
    _id: { type: "ObjectId", unique: true, primary: true },
    createdAt: { type: "datetime", onCreate: () => new Date() },
    updatedAt: { type: "datetime", onUpdate: () => new Date() },
    lines: {
      kind: "embedded",
      entity: "OrderLine",
      array: true,
    },
    client: { kind: "m:1", entity: "Client", inversedBy: (e) => e.orders },
  },
});

export const ProductSchema = new EntitySchema<Product>({
  class: Product,
  properties: {
    _id: { type: "ObjectId", unique: true, primary: true },
    sku: { type: "string", length: 40 },
    qty: { type: "int" },
  },
});

export const AddressSchema = new EntitySchema<Address>({
  class: Address,
  embeddable: true,
  properties: {
    country: { type: "string", length: 40 },
    state: { type: "string", length: 40 },
    city: { type: "string", length: 40 },
    street: { type: "string", length: 40 },
    postalCode: { type: "string", length: 10 },
  },
});

export const ClientSchema = new EntitySchema<Omit<Client, "fullName">>({
  class: Client,
  properties: {
    _id: { type: "ObjectId", unique: true, primary: true },
    email: { type: "string", length: 40 },
    tel: { type: "string", length: 40 },
    fname: { type: "string", length: 40 },
    lname: { type: "string", length: 40 },
    address: { kind: "embedded", entity: "Address", object: true },
    orders: { kind: "1:m", entity: "Order", mappedBy: (e) => e.client },
  },
});
