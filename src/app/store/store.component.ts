import {Component, OnInit} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  moduleId: module.id
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public productsPerPage = 3;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) {
  }

  ngOnInit() {
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = Number(newPage);
  }

  changePageSize(newSize: number) {
    this.productsPerPage = newSize;
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }


}
