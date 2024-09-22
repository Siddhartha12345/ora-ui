import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductUtil } from '../../util/product-util';
import { shampooMockList } from '../../../assets/mock/shampoo-mock';

@Component({
  selector: 'app-shampoo',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './shampoo.component.html',
  styleUrl: './shampoo.component.css'
})
export class ShampooComponent {
  
  shampooList: Product[] = shampooMockList;

  // Method to toggle bookmark state
  toggleBookmark(productId: string): void {
    ProductUtil.toggleBookmark(this.shampooList, productId);
  }

  addToCart(productId: string): void {
    ProductUtil.addToCart(this.shampooList, productId);
  }
}
