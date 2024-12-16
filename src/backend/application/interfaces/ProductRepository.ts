import { IProduct } from "@/backend/domain";

export abstract class ProductRepository {
  abstract add(product: IProduct): Promise<void>;
  abstract save(product: IProduct): Promise<void>;
  abstract getBySku(sku: string): Promise<IProduct | null>;
  abstract getAll(): Promise<IProduct[]>;
  abstract delete(product: IProduct): Promise<void>;
}
