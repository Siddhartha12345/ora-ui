import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../model/product';
import { bodyWashMockList } from '../../../../assets/mock/body-wash-mock';
import { StarRatingComponent } from "../../../common/star-rating/star-rating.component";

@Component({
  selector: 'app-body-wash-view',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './body-wash-view.component.html',
  styleUrl: './body-wash-view.component.css'
})
export class BodyWashViewComponent implements OnInit {

  bodyWashList: Product[] = bodyWashMockList;
  bodyWash!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // fetch product id from the url
    const productId = this.route.snapshot.paramMap.get('id') as string;
    console.log('Product ID:', productId);
    // fetch product based on the productId
    this.bodyWash = this.fetchProductBasedOnId(productId);
    console.log('Product:', this.bodyWash);
  }

  fetchProductBasedOnId(productId: string): Product {
    return this.bodyWashList.find(p => p.productId == productId) as Product;
  }
}
