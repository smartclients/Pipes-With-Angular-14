import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18 plural
  clients = ['alex', 'jess', 'jose', 'jinx', 'ekko'];
  mapClients = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  //select i18
  name = 'alex';
  genre = 'male';
  mapInvitation = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //keyvalue
  person = {
    name: 'Lolo',
    age: 29,
    address: 'calle 11',
  };

  heroes = [
    {
      name: 'vegeta',
      power: 123,
    },
    {
      name: 'batman',
      power: 12,
    },
    {
      name: 'kakashi',
      power: 154,
    },
    {
      name: 'naruto',
      power: 234,
    },
  ];

  //async
  //creamos un observable que emite valores
  myObservable = interval(5000); // 0,1,2,3,4,5 ..

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolve');
    }, 3000);
  });

  changeName() {
    this.name = 'jess';
    this.genre = 'female';
  }

  deletClient() {
    this.clients.shift();
  }
}
