import { IAddress } from "@/interfaces";

export class Address implements IAddress {
  constructor(
    public readonly country: string,
    public readonly state: string,
    public readonly city: string,
    public readonly street: string,
    public readonly postalCode: string
  ) {}
}
