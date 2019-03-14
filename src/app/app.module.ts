import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavitagionComponent} from './navitagion/navitagion.component';
import {ProductsComponent} from './products/products.component';
import {BasketComponent} from './basket/basket.component';
import {ProducersComponent} from './producers/producers.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddProductComponent} from './products/add-product/add-product.component';
import {EditProductComponent} from './products/edit-product/edit-product.component';
import {AddOrderComponent} from './basket/add-order/add-order.component';
import {EditOrderComponent} from './basket/edit-order/edit-order.component';
import {NgxPaginationModule} from "ngx-pagination";

const appRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'editProduct',
    component: EditProductComponent
  },
  {
    path: 'producers',
    component: ProducersComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'addOrder',
    component: AddOrderComponent
  },
  {
    path: 'editOrder',
    component: EditOrderComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavitagionComponent,
    ProductsComponent,
    BasketComponent,
    ProducersComponent,
    StatisticsComponent,
    PageNotFoundComponent,
    AddProductComponent,
    EditProductComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
