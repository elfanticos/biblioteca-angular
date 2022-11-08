import { Component, OnInit } from '@angular/core';
import { ImplementPrototype } from './models/implement-prototype.model';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const OBJECT1 = new ImplementPrototype([1, 2, 3, 4]);
    console.log(`OBJECT1 ${JSON.stringify(OBJECT1)}`);

    const OBJECT2 = OBJECT1.clone();
    console.log(`OBJECT2 ${JSON.stringify(OBJECT2)}`);

    OBJECT2.field[1] = 101;

    console.log(`OBJECT1 ${JSON.stringify(OBJECT1)}`);
    console.log(`OBJECT2 ${JSON.stringify(OBJECT2)}`);
  }

}
