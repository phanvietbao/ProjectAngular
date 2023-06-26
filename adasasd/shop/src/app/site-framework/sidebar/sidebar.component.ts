import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  categoryList: Category | any;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data=>{
      this.categoryList = data;
    })
  }

}
