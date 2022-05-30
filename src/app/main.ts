import {
  addProduct,
  products,
  updateProduct,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];

updateProduct(product.id, {
  description: 'Descripcion editada',
  price: 500,
  title: 'Titulo editado',
  stock: 300,
});
