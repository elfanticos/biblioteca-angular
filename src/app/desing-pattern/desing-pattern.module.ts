import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DesingPatternpRoutingModule } from './desing-pattern-routing.module';
import { MethodFactoryComponent } from './creational/method-factory/method-factory.component';



@NgModule({
  declarations: [
    DesingPatternComponent,
    StrategyComponent,
    MethodFactoryComponent
  ],
  imports: [
    CommonModule,
    DesingPatternpRoutingModule
  ]
})
export class DesingPatternModule { }
