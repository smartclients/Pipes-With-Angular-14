import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

//este modulo necesita BrowserAnimationsModule
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
