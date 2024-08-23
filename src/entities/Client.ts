import { ObjectId } from "@mikro-orm/mongodb";
import { IAddress, IClient, IOrder } from "@/interfaces";

export class Client implements IClient {
  _id!: ObjectId;
  readonly orders!: IOrder[];

  get fullName() {
    return `${this.fname} ${this.lname}`;
  }

  constructor(
    public readonly email: string,
    public readonly tel: string,
    public readonly fname: string,
    public readonly lname: string,
    public readonly address: IAddress
  ) {}
}
