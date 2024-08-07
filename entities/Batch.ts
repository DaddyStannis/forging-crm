import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

import { OrderLine } from "./OrderLine";

@Entity()
export class Batch {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  @OneToMany(() => OrderLine, (line) => line.batch)
  allocations = new Collection<any>(this);
}
