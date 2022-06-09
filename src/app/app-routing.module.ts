import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EmptyComponent } from './empty/empty.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { SigninComponent } from './auth1/signin/signin.component';
import { SignupComponent } from './auth1/signup/signup.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { AuthGardGuard } from './services/auth-gard.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: FrontPageComponent },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      { path: ':category', component: CategoryListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'payment', component: PaymentComponent },
       { path: 'empty', component: EmptyComponent },
    ]
  },
  {
    path: 'auth1',
    //component: ,
    children: [
      { path: 'signin',  component: SigninComponent },// route ma a : na ave a khali prea miter ma data pass karva mate use thay
      { path: 'signup', component: SignupComponent },
    ]
  },

 /* {
    path: 'homepage',
  component: HomepageComponent,
  children: [
    { path: 'homapage', component: HomepageComponent }]
  },*/


  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'empty', component: EmptyComponent },
  {path:'homepage',component:HomepageComponent}
  // { path: '**', component: NotFoundComponent }],


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
