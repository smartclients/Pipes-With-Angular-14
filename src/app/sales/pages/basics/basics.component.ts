import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  lowerName = 'alexander';
  upperName = 'ALEXANDER';
  compName = 'ALExaNder';

  date: Date = new Date();

  constructor() {}
}
