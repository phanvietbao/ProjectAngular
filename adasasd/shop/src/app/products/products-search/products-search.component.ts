import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css'],
})
export class ProductsSearchComponent{
  products: Product[] | any;
  filteredProducts: | any;
  searchTerm: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product: { name: string; }) => {
      return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
