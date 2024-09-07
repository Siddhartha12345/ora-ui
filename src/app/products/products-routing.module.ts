import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoisturizerComponent } from './moisturizer/moisturizer.component';
import { ShampooComponent } from './shampoo/shampoo.component';
import { HairSerumsComponent } from './hair-serums/hair-serums.component';
import { BodyWashComponent } from './body-wash/body-wash.component';

const routes: Routes = [
  { path: 'shampoo', component: ShampooComponent },
  { path: 'moisturizer', component: MoisturizerComponent },
  { path: 'hair-serum', component: HairSerumsComponent },
  { path: 'body-wash', component: BodyWashComponent },
  { path: '', redirectTo: 'shampoo', pathMatch: 'full' }  // default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
