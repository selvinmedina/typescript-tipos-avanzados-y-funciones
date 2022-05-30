import { Id } from "../../utilities/id.model";
import { Product } from "./product.model";

export interface CreateProductoDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Id;
}

type example = Pick<Product, 'color' | 'description'>
