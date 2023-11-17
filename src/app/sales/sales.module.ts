import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//OUR PIPES
import { UppercasePipe } from './pipes/uppercase.pipe';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { IsFlyPipe } from './pipes/is-fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdersComponent,
    UppercasePipe,
    IsFlyPipe,
    OrderPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdersComponent,
  ],
})
export class SalesModule {}
