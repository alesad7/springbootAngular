import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  key: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.listAllProducts();
  }

  public listAllProducts() {
    this.apiService.getAllProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        alert("ERROR!");
      }
    );
  }

  public removeProduct(id) {
    alert("Czy chcesz usunąć produkt o id: " + id);
    this.apiService.removeProduct(id).subscribe(
      (data) => {
        console.log("success")
        this.listAllProducts();
      }
    );
  }

  public putIdIntoLocalStorage(id) {
    localStorage.setItem(this.key, id);
  }
}
