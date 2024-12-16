import { IProduct } from "@/backend/domain";
import { CategoryRepository, ProductRepository } from "../interfaces";
import { ProductCreateInput, ProductUpdateInput } from "../schemas";

export async function createProduct(
  data: ProductCreateInput,
  products: ProductRepository,
  categories: CategoryRepository
): Promise<IProduct> {
  const category = await categories.getByName(data.category);

  if (!category) {
    throw new Error(`Category ${data.category} not found`);
  }

  const productWithSameSku = await products.getBySku(data.sku);

  if (productWithSameSku) {
    throw new Error(`Product with sku ${data.sku} is already exist`);
  }

  const product: IProduct = {
    ...data,
    price: data.price ?? 0,
    qty: data.qty ?? 0,
    category,
  };

  await products.add(product);

  return product;
}

export async function deleteProduct(
  sku: string,
  products: ProductRepository
): Promise<void> {
  const product = await products.getBySku(sku);

  if (!product) {
    throw new Error(`Product with sku ${sku} not found`);
  }

  await products.delete(product);
}

export async function updateProduct(
  sku: string,
  data: ProductUpdateInput,
  products: ProductRepository
): Promise<IProduct> {
  const product = await products.getBySku(sku);

  if (!product) {
    throw new Error(`Product with sku ${sku} not found`);
  }

  Object.assign(product, data);

  await products.save(product);

  return product;
}
