import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductType } from '../constant/product-enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  TYPE_SHAMPOO = ProductType.SHAMPOO;
  TYPE_MOISTURIZER = ProductType.MOISTURIZER;
  TYPE_HAIR_SERUM = ProductType.HAIR_SERUM;
  TYPE_BODY_WASH = ProductType.BODY_WASH;
}
