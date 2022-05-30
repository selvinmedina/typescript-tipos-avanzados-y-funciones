type Sizes = 'S' | 'M' | 'L' | 'XL';
export type UserId = string | number;
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

interface Product {
  id: UserId;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

const products: Product[] = [];

products.push({ id: 1, title: 'p1', createdAt: new Date(), stock: 90 });

products

const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({id: 2, title: 'p2', createdAt: new Date(), stock: 100});

products
