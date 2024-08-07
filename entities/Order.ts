import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
  ManyToOne,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

@Entity()
export class Order {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();
}
