import { CreateProductoDto, UpdateProductDto } from './product.dto';
import { Product } from './product.model';
import { faker } from '@faker-js/faker';
import { Id } from '../../utilities/id.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductoDto): Product => {
  const newProduct: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    updatedAt: faker.date.recent(),
  };
  products.push(newProduct);

  return newProduct;
};

export const updateProduct = (id: Id, cambios: UpdateProductDto) => {
  let index: number = products.findIndex((x) => x.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...cambios,
  };

  return products[index];
};

export const deleteProduct = (data: Product) => {};

export const findOneProduct = (data: Product) => {};
