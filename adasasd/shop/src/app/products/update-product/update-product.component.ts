import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productId = 0;
  productDetails: Product |any;
  constructor(private activatedRoute: ActivatedRoute,private productServive: ProductsService){

  }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
      this.productServive.viewProduct(this.productId).subscribe(productData =>{
        this.productDetails = productData;
      })
    });
  }

  updateProduct(form :any){
    const updateProduct ={
      id: 4,
      categoryId:form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.rating,
      price: form.value.price,
      productImg: '',
      isValiable: 1,
      color: form.value.color,
      reviews: form.value.reviews
    };
    this.productServive.updateProduct(this.productId, form.value).subscribe(data =>{

    })
  }

}
