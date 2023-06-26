import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  constructor(private productService: ProductsService){}

  ngOnInit(): void {

  }

  addNewProduct(form: any){
    const min = 1;
    const max = 1000000;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    let newProduct ={
      id: random,
      categoryId:form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: form.value.product_image,
      isValiable: form.value.product_valiable,
      color: form.value.product_color,
      reviews: form.value.product_review
    };
    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    })
  }
}
