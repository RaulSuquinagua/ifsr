import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'cart', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'settings', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forget', loadChildren: './forget/forget.module#ForgetPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'addresses', loadChildren: './addresses/addresses.module#AddressesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'addaddress', loadChildren: './addaddress/addaddress.module#AddaddressPageModule' },
  { path: 'address/edit/:id', loadChildren: './addaddress/addaddress.module#AddaddressPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'vieworder/:id', loadChildren: './vieworder/vieworder.module#VieworderPageModule' },
  { path: 'tracking/:id', loadChildren: './tracking/tracking.module#TrackingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
