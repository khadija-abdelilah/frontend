// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ShopingPageComponent } from './shoping-page/shoping-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent} from './cart/cart.component';
import { SigninComponent} from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'shopping', component: ShopingPageComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'cart', component:  CartComponent },
  { path: 'signin', component: SigninComponent },
  { path:"forgot", component:ForgotComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, // Lazy load admin module

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
