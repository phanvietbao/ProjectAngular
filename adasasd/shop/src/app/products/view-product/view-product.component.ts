import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
  productId = 0;
  productDetails: Product | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
    });
    this.productService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });
  }
}
