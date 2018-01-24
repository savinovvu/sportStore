import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/observable/from";
import {Order} from './order.model';

@Injectable()
export class StaticDataSource{
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'product 1(category 1)', 100),
    new Product(2, 'Product 2', 'Category 1', 'product 1(category 1)', 100),
    new Product(3, 'Product 3', 'Category 1', 'product 1(category 1)', 100),
    new Product(4, 'Product 4', 'Category 2', 'product 1(category 2)', 100),
    new Product(5, 'Product 5', 'Category 2', 'product 1(category 2)', 100),
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }

  saveOrder(order: Order): Observable<Order>{
    console.log(JSON.stringify(order));
    return Observable.from([order]);

  }

}
