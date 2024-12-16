import { ICategory } from "@/backend/domain";

export abstract class CategoryRepository {
  abstract add(category: ICategory): Promise<void>;
  abstract save(category: ICategory): Promise<void>;
  abstract getByName(name: string): Promise<ICategory | null>;
  abstract getAll(): Promise<ICategory[]>;
  abstract delete(category: ICategory): Promise<void>;
}
