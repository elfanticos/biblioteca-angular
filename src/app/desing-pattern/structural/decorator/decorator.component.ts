import { Component, OnInit } from '@angular/core';
import { BaseEnemy } from './models/baseEnemy.model';
import { HelmetDecorator } from './models/decorators/helmet-decorator.model';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let enemy = new BaseEnemy();
    console.log(enemy.takeDamage());
    let enemyWithHelmet = new HelmetDecorator(enemy);
    console.log(enemyWithHelmet.takeDamage());
  }

}
