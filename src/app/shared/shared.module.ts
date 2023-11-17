import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//components
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}
