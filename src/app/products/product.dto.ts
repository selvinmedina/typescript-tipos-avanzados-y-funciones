import { Id } from '../../utilities/id.model';
import { Product } from './product.model';

export interface CreateProductoDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Id;
}

export type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductoDto> {}

type example2 = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
