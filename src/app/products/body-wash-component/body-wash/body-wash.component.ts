import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bodyWashMockList } from '../../../../assets/mock/body-wash-mock';
import { Product } from '../../../model/product';
import { ProductUtil } from '../../../util/product-util';
import { StarRatingComponent } from '../../../common/star-rating/star-rating.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body-wash',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterModule],
  templateUrl: './body-wash.component.html',
  styleUrls: ['./body-wash.component.css', '../../products-styles.css']
})
export class BodyWashComponent {

  bodyWashList: Product[] = bodyWashMockList;

  // Method to toggle bookmark state
  toggleBookmark(productId: string): void {
    ProductUtil.toggleBookmark(this.bodyWashList, productId);
  }

  addToCart(productId: string): void {
    ProductUtil.addToCart(this.bodyWashList, productId);
  }
}
