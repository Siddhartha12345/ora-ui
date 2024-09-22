import { Component } from '@angular/core';
import { hairSerumMockList } from '../../../assets/mock/hair-serum-mock';
import { Product } from '../../model/product';
import { ProductUtil } from '../../util/product-util';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-hair-serums',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './hair-serums.component.html',
  styleUrls: ['./hair-serums.component.css', '../products-styles.css']
})
export class HairSerumsComponent {

  hairSerumList: Product[] = hairSerumMockList;

  // Method to toggle bookmark state
  toggleBookmark(productId: string): void {
    ProductUtil.toggleBookmark(this.hairSerumList, productId);
  }

  addToCart(productId: string): void {
    ProductUtil.addToCart(this.hairSerumList, productId);
  }
}
