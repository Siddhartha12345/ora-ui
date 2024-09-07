import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsModule } from './products/products.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingPageComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    AppRoutingModule,
    ProductsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
