import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

import { OrderLine } from "./OrderLine";

@Entity()
export class Allocation {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @ManyToOne()
  orderId!: number;

  @ManyToOne()
  batchId!: number;
}
