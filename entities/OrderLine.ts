import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
  ManyToOne,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

import { Batch } from "./Batch";

@Entity()
export class OrderLine {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property({ default: 0 })
  qty: number = 0;

  @ManyToOne(() => Batch)
  batch!: Batch;
}
