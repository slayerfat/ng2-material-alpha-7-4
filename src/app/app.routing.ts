import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductGridListComponent } from './product-grid-list/product-grid-list.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'product-grid-list', component: ProductGridListComponent},
  {path: 'login', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];

export const routesModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
