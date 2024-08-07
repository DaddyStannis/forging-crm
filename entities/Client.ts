import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Client {
  @PrimaryKey()
  id!: bigint;

  @Property()
  email: string;

  @Property()
  tel: string;

  @Property()
  fname: string;

  @Property()
  lname: string;

  constructor(email: string, tel: string, fname: string, lname: string) {
    this.email = email;
    this.tel = tel;
    this.fname = fname;
    this.lname = lname;
  }
}
