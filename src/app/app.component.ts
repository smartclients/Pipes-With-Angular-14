import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  name = 'alex hernandez';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    //para la animacion del componente filed-set
    this.primengConfig.ripple = true;
  }

  showName() {
    this.name;
  }
}
