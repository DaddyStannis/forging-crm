import { Material } from "../enums";
import { ICategory } from "./ICategory";

export interface IProduct {
  readonly sku: string;
  category: ICategory;
  width: number;
  height: number;
  thickness: number;
  diameter: number;
  weight: number;
  price: number;
  material: Material;
  qty: number;
  imgSrc?: string;
}
