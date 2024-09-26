import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { ProductUtil } from '../util/product-util';
import { Product } from '../model/product';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // fetch the product type from url
    const productType = Number(this.route.snapshot.paramMap.get('type'));
    console.log('Product Type:', productType);
    // fetch product list based on the type
    this.productList = ProductUtil.fetchProductList(productType);
    // Reload when the same route is visited again (from the app component navigation)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const productType = Number(this.route.snapshot.paramMap.get('type'));
        console.log('Product Type:', productType);
        // Fetch or reload data when this route is revisited
        this.productList = ProductUtil.fetchProductList(productType);
      });
  }

  // Method to toggle bookmark state
  toggleBookmark(productId: string): void {
    ProductUtil.toggleBookmark(this.productList, productId);
  }

  addToCart(productId: string): void {
    ProductUtil.addToCart(this.productList, productId);
  }
}
