import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './product/new-product/new-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ProductsNavBarComponent } from './product/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    NavBarComponent,
    ProductComponent,
    HomeComponent,
    NewProductComponent,
    UpdateProductComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
 
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
