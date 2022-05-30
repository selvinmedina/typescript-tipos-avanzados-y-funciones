import { CreateProductoDto } from './product.dto';
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

export const updateProduct = (id: Id, data: Product) => {
  let product: Product | undefined = products.find((x) => x.id === id);

  if (product != undefined) {
    product.description = data.description;
    product.category = data.category;
    product.color = data.color;
    product.image = data.image;
    product.isNew = data.isNew;
    product.price = data.price;
    product.size = data.size;
    product.tags = data.tags;
    product.title = data.title;
    product.stock = data.stock;
  } else {
    console.log('El producto no existe', data);
  }
};

export const deleteProduct = (data: Product) => {};

export const findOneProduct = (data: Product) => {};
