import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: String;
  price: String;
  priceDet: String;
  isCrueltyFree: boolean;
  producer: String;

  products: Product[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.name = "";
    this.price = "";
    this.priceDet = "";
    this.isCrueltyFree = null;
    this.producer = "";
  }

  onSubmit() {
    if (this.isCrueltyFree === null) this.isCrueltyFree = false;

    if (this.name !== "" && this.price !== "") {
      this.apiService.addProduct(this.name, this.price, this.isCrueltyFree).subscribe(
        (data) => {
          console.log("success");
        }
      );
    } else alert("Empty values!");
  }

}
