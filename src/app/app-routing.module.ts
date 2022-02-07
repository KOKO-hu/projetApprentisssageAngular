import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

const routes: Routes = [
  { path: 'inscription', component: PageInscriptionComponent },
  { path: 'product', component: ProductComponent },
  { path: 'newproduct', component: NewProductComponent },
  { path: 'updateproduct/:id', component: UpdateProductComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
