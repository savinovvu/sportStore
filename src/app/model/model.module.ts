import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart.model';
import {OrderRepository} from './order.repository';
import {Order} from './order.model';
import {RestDataSource} from './rest.datasource';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [HttpClientModule, BrowserModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    // StaticDataSource
    { provide: StaticDataSource, useClass: RestDataSource },
  RestDataSource, AuthService
  ]
})
export  class ModelModule{}
