import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { ProductUtil } from '../util/product-util';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  productList: Product[] = [];
  product!: Product;
  productType: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // fetch product type from the url
    this.productType = Number(this.route.snapshot.paramMap.get('type'));
    console.log('Product Type:', this.productType);
    // fetch the product list based on type
    this.productList = ProductUtil.fetchProductList(this.productType);

    // fetch product id from the url
    const productId = this.route.snapshot.paramMap.get('id') as string; 
    // fetch product based on the productId
    this.product = this.fetchProductBasedOnId(productId);
    console.log('Product:', this.product);
  }

  fetchProductBasedOnId(productId: string): Product {
    return this.productList.find(p => p.productId == productId) as Product;
  }
}
