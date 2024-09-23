import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MoisturizerComponent } from './moisturizer-component/moisturizer/moisturizer.component';
import { ShampooComponent } from './shampoo-component/shampoo/shampoo.component';
import { HairSerumsComponent } from './hair-serum-component/hair-serums/hair-serums.component';
import { BodyWashComponent } from './body-wash-component/body-wash/body-wash.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ShampooComponent,
    MoisturizerComponent,
    HairSerumsComponent,
    BodyWashComponent
  ]
})
export class ProductsModule { }
