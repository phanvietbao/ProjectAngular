import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent {
  searchCategory: Category | any;
  productList: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private ProductsService: ProductsService){

  }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data['id'];
      this.ProductsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData =>{
        this.productList = categoryData;
      })
    });
  }
}
