import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DesingPatternpRoutingModule } from './desing-pattern-routing.module';
import { MethodFactoryComponent } from './creational/method-factory/method-factory.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';



@NgModule({
  declarations: [
    DesingPatternComponent,
    StrategyComponent,
    MethodFactoryComponent,
    AbstractFactoryComponent
  ],
  imports: [
    CommonModule,
    DesingPatternpRoutingModule
  ]
})
export class DesingPatternModule { }
