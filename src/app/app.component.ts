import { Component, OnInit } from '@angular/core';
import { ProductType } from './constant/product-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ora-ui';

  TYPE_SHAMPOO = ProductType.SHAMPOO;
  TYPE_MOISTURIZER = ProductType.MOISTURIZER;
  TYPE_HAIR_SERUM = ProductType.HAIR_SERUM;
  TYPE_BODY_WASH = ProductType.BODY_WASH;
}
