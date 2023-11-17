import { Component, OnInit } from '@angular/core';
//iinterface
import { Color, Heroe } from '../../interfaces/sales.interface';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [],
})
export class OrdersComponent implements OnInit {
  isUppercase = true;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green,
    },
  ];

  orderBy: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggleUppercase() {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
