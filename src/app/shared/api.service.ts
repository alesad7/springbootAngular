import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../products/model/product";
import {Observable} from "rxjs";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {Basket} from "../basket/model/model.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/api';
  private LIST_PRODUCTS_URL = 'http://localhost:8080/api/products';
  private PRODUCT_URL = 'http://localhost:8080/api/product';
  private LIST_BASKETS_URL = 'http://localhost:8080/api/baskets';
  private BASKET_URL = 'http://localhost:8080/api/basket';


  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.LIST_PRODUCTS_URL);
  }

  getAllOrders(): Observable<Basket[]> {
    return this.http.get<Basket[]>(this.LIST_BASKETS_URL);
  }

  removeProduct(id): Observable<Product> {
    const url = `${this.PRODUCT_URL}/${id}`;
    return this.http.delete<Product>(url);
  }

  removeOrder(id): Observable<Basket> {
    const url = `${this.BASKET_URL}/${id}`;
    return this.http.delete<Basket>(url);
  }

  getProductById(id): Observable<Product> {
    const url = `${this.PRODUCT_URL}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(name, price, isCrueltyFree): Observable<Product> {
    const data = {
      "productName": name,
      "productPrice": price,
      "productPriceDet": 5.0,
      "producer": null,
      "crueltyFree": isCrueltyFree
    };
    return this.http.post<Product>(this.PRODUCT_URL, data);
  }

  editProduct(id, name, price, isCrueltyFree): Observable<Product> {
    const data = {
      "productName": name,
      "productPrice": price,
      "productPriceDet": 5.0,
      "producer": null,
      "crueltyFree": isCrueltyFree,
      "productId": parseInt(id)
    };
    return this.http.put<Product>(this.PRODUCT_URL, data);
  }

}
