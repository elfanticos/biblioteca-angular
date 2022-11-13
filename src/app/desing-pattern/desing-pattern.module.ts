import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DesingPatternpRoutingModule } from './desing-pattern-routing.module';
import { MethodFactoryComponent } from './creational/method-factory/method-factory.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';
import { BuilderComponent } from './creational/builder/builder.component';
import { PrototypeComponent } from './creational/prototype/prototype.component';
import { SingletonComponent } from './structural/singleton/singleton.component';
import { BridgeComponent } from './structural/bridge/bridge.component';
import { DecoratorComponent } from './structural/decorator/decorator.component';



@NgModule({
  declarations: [
    DesingPatternComponent,
    StrategyComponent,
    MethodFactoryComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    PrototypeComponent,
    SingletonComponent,
    BridgeComponent,
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    DesingPatternpRoutingModule
  ]
})
export class DesingPatternModule { }
