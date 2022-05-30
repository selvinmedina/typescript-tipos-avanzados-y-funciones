import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  image: string;
  description: string;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
