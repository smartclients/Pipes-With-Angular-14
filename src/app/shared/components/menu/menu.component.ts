import { Component, OnInit } from '@angular/core';
//tyoes
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Pipes Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/',
        },
        {
          label: 'Numeros',
          icon: 'pi pi-dollar',
          routerLink: 'numbers',
        },
        {
          label: 'No  comunes',
          icon: 'pi pi-globe',
          routerLink: 'no-commons',
        },
      ],
    },
    {
      label: 'Pipes Personalizados',
      icon: 'pi pi-cog',
      routerLink: 'orders',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
