import {Product} from "../../products/model/product";

export interface Basket {
  basketId: number,
  orderDate: Date,
  deliveryDate: Date,
  products: Product[]
}
