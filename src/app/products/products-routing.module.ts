import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoisturizerComponent } from './moisturizer-component/moisturizer/moisturizer.component';
import { ShampooComponent } from './shampoo-component/shampoo/shampoo.component';
import { HairSerumsComponent } from './hair-serum-component/hair-serums/hair-serums.component';
import { BodyWashComponent } from './body-wash-component/body-wash/body-wash.component';
import { BodyWashViewComponent } from './body-wash-component/body-wash-view/body-wash-view.component';

const routes: Routes = [
  { path: 'shampoo', component: ShampooComponent },
  { path: 'moisturizer', component: MoisturizerComponent },
  { path: 'hair-serum', component: HairSerumsComponent },
  { path: 'body-wash', component: BodyWashComponent },
  { path: 'body-wash/:id', component: BodyWashViewComponent },
  { path: '', redirectTo: 'shampoo', pathMatch: 'full' }  // default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
