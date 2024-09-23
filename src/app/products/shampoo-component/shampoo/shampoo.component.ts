import { Component } from '@angular/core';
import { Product } from '../../../model/product';
import { CommonModule } from '@angular/common';
import { ProductUtil } from '../../../util/product-util';
import { shampooMockList } from '../../../../assets/mock/shampoo-mock';
import { StarRatingComponent } from '../../../common/star-rating/star-rating.component';

@Component({
  selector: 'app-shampoo',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './shampoo.component.html',
  styleUrls: ['./shampoo.component.css', '../../products-styles.css']
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
