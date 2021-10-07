import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductoverviewComponent } from './productoverview/productoverview.component';

const routes: Routes = [
  {path: 'products', component : ProductoverviewComponent},
  {path: 'products/:id', component : ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
