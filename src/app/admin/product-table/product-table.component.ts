import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../model/product.repository';
import {Product} from '../../model/product.model';

@Component({
  moduleId: module.id,
  selector: 'product-table',
  templateUrl: "product-table.component.html",
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor(private  repository: ProductRepository) { }

  getProducts():Product[]{
    return this.repository.getProduct(null);
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }


  ngOnInit() {
  }

}
