import { User } from "../../01-enum";
import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";

export interface Ordeer extends BaseModel {
  products: Product[],
  user: User
}
