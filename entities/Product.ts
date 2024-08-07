import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Product {
  @PrimaryKey({ type: String })
  sku!: string;

  constructor(sku: string) {
    this.sku = sku;
  }
}
