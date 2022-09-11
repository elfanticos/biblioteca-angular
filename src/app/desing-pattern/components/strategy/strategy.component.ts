import { Component, OnInit } from '@angular/core';
import { AvengersWithStrategy, UnarmedHero } from './strategy-with.model';
import { Avengers } from './strategy-without.model';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const avengers = new Avengers();

    avengers.recruit({
      name: 'Iron Man',
      weapon: 'laser'
    });

    avengers.fight();

    /***********************/
    /***********************/
    /***********************/

    const avengersWith = new AvengersWithStrategy();

    const capitan_america = new UnarmedHero(
      'Capitan America'
    );

    const iron_fish = new UnarmedHero(
      'Iron fish'
    );

    const dark_devil = new UnarmedHero(
      'Dark Devil'
    );

    avengersWith.recruit(capitan_america);
    avengersWith.recruit(iron_fish);
    avengersWith.recruit(dark_devil);
    avengersWith.fight();
  }

}




