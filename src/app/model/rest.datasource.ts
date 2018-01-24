import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.model';
import {Order} from './order.model';
import {Cart} from './cart.model';
import {RequestMethod} from '@angular/http';

;

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return <Observable<Product[]>> this.httpClient.get(this.baseUrl+'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return <Observable<Order>> this.httpClient.post(this.baseUrl+'orders', order);
  }


}
