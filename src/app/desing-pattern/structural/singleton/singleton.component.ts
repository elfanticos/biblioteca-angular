import { Component, OnInit } from '@angular/core';
import { Singleton } from './singleton';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const s1 = Singleton.getInstance();

    s1.value = 'Hola mundo';
    const s2 = Singleton.getInstance();

    // const s3 = new Singleton();

    if (s1 == s2) {
      console.log('Singleton works, both variables contain the same instance.');
    } else {
      console.log('Singleton failed, variables contain different instances.');
    }

    console.log(`s2 value => `, s2.value);
  }

}
