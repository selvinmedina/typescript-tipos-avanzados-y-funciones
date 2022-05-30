export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew: isNew,
    stock: stock,
  };
};

const p1 = createProduct('10', false, 0);

p1
