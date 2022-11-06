import { Component, OnInit } from '@angular/core';
import { CardBuilder } from './models/constructors/car-builder.model';
import { Director } from './models/Director';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const director = new Director();
    const builder = new CardBuilder();
    director.setBuilder(builder);
    director.constructSportsCar();
    console.log(builder.getProducts());
  }

}
