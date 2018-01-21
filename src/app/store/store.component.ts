import {Component, OnInit} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  moduleId: module.id
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;

  constructor(private repository: ProductRepository) {
  }

  ngOnInit() {
  }

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }


}
