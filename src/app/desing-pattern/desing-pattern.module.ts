import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DesingPatternpRoutingModule } from './desing-pattern-routing.module';



@NgModule({
  declarations: [
    DesingPatternComponent,
    StrategyComponent
  ],
  imports: [
    CommonModule,
    DesingPatternpRoutingModule
  ]
})
export class DesingPatternModule { }
