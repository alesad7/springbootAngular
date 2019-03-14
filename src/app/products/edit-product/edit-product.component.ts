import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {
  private key: string;
  private productId: string;

  name: String;
  price: String;
  priceDet: String;
  isCrueltyFree: boolean;
  producer: String;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.log(localStorage.getItem(this.key));
    this.productId = localStorage.getItem(this.key);
    this.getProductById(this.productId);
    this.name = "";
    this.price = "";
    this.priceDet = "";
    this.isCrueltyFree = null;
    this.producer = "";
  }

  product: Product;

  public getProductById(id) {
    this.apiService.getProductById(id).subscribe(
      (res) => {
        this.product = res;
      }
    )
  }

  onSubmit() {
    if (this.name !== "" && this.price !== "") {
      this.apiService.editProduct(this.productId, this.name, this.price, this.isCrueltyFree).subscribe(
        (data) => {
          console.log("success");
        }
      );
    } else alert("Empty values!");
  }
}
