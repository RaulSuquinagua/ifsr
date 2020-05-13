import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'drivers', loadChildren: './drivers/drivers.module#DriversPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'orders/:type/:id', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
