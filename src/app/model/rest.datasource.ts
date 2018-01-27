import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.model';
import {Order} from './order.model';
import 'rxjs/add/operator/map';


const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    let observable = this.httpClient.post(this.baseUrl + 'login', {name: user, password: pass})
      .map((response: any) => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
      });
    return observable;
  }

  getProducts(): Observable<Product[]> {
    const headers = this.getHeaders();
    return <Observable<Product[]>> this.httpClient.get(this.baseUrl + 'products', {headers});
  }


  saveOrder(order: Order): Observable<Order> {
    let url: string = this.baseUrl + 'orders';
    const headers = this.getHeaders();
    return <Observable<Order>> this.httpClient.post(url, order, {headers});
  }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer<${this.auth_token}>`);
    return headers;
  }

  saveProduct(product: Product): Observable<Product> {
    let url: string = this.baseUrl + 'products';
    const headers = this.getHeaders();
    return this.httpClient.post(url, product, {headers});
  }

  updateProduct(product: Product): Observable<Product> {
    let url: string = this.baseUrl + 'products';
    const headers = this.getHeaders();
    return this.httpClient.put(url, product, {headers});
  }

  deleteProduct(id: number): Observable<Product> {
    let url: string = this.baseUrl + `products/` + id;
    const headers = this.getHeaders();
    return this.httpClient.delete(url, {headers});
  }

  getOrders(): Observable<Order[]> {
    let url: string = this.baseUrl + `orders`;
    const headers = this.getHeaders();
    return <Observable<Order[]>>this.httpClient.get(url, {headers});
  }

  deleteOrder(id: number): Observable<Order> {
    let url: string = this.baseUrl + `orders/` + id;
    const headers = this.getHeaders();
    return <Observable<Order>> this.httpClient.delete(url, {headers});
  }

  updateOrder(order: Order): Observable<Order>{
    let url: string = this.baseUrl + `orders`;
    const headers = this.getHeaders();
    return <Observable<Order>>this.httpClient.put(url, order, {headers});
  }


}
