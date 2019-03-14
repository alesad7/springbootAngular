import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Basket} from "./model/model.component";
import {Product} from "../products/model/product";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  orders: Basket[] = [];
  product: Product;
  key: string;

  ngOnInit() {
    this.getAllOrders();
  }

  private getAllOrders() {
    this.apiService.getAllOrders().subscribe(
      res => {
        this.orders = res;
      },
      err => {
        alert("ERROR!");
      }
    );
  }

  removeOrder(id: number) {
    alert("Czy chcesz usunąć zamówienie o id: " + id);
    this.apiService.removeOrder(id).subscribe(
      (data) => {
        console.log("success")
        this.getAllOrders();
      }
    );
  }

  public putIdIntoLocalStorage(id) {
    localStorage.setItem(this.key, id);
  }
}
