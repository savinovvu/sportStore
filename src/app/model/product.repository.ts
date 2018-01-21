import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDatasource} from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private  dataSource: StaticDatasource) {
    this.dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }


  getProducts(selectedCategory: any): Product[] {
    return this.products.filter(v=> v.category === selectedCategory);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
