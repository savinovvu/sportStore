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
      .map((response:any) => {
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
}
