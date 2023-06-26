import { Component,OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList : Product | any;

  constructor(private productsService: ProductsService){};

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productList = data;
    })
  }

}

