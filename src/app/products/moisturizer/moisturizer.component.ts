import { Component } from '@angular/core';
import { moisturizerMockList } from '../../../assets/mock/moisturizer-mock';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Product } from '../../model/product';
import { ProductUtil } from '../../util/product-util';

@Component({
  selector: 'app-moisturizer',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './moisturizer.component.html',
  styleUrls: ['./moisturizer.component.css', '../products-styles.css']
})
export class MoisturizerComponent {

  moisturizerList: Product[] = moisturizerMockList;

  // Method to toggle bookmark state
  toggleBookmark(productId: string): void {
    ProductUtil.toggleBookmark(this.moisturizerList, productId);
  }

  addToCart(productId: string): void {
    ProductUtil.addToCart(this.moisturizerList, productId);
  }
}
