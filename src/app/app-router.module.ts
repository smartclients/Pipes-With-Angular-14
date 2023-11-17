import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { OrdersComponent } from './sales/pages/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
