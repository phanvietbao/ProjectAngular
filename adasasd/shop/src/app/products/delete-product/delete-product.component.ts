import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productId = 0;
  constructor(private activatedRoute: ActivatedRoute,private productService: ProductsService){

  }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
      this.productService.deleteProduct(this.productId).subscribe(data =>{
        
      })
    });
  }
}
