import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './components/strategy/strategy.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';
import { BuilderComponent } from './creational/builder/builder.component';
import { MethodFactoryComponent } from './creational/method-factory/method-factory.component';
import { PrototypeComponent } from './creational/prototype/prototype.component';
import { SingletonComponent } from './structural/singleton/singleton.component';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';
import { BridgeComponent } from './structural/bridge/bridge.component';
import { DecoratorComponent } from './structural/decorator/decorator.component';

const routes: Routes = [
  {
    path: 'home',
    component: DesingPatternComponent,
    children: [
      {
        path: 'strategy',
        component: StrategyComponent,
      },
      {
        path: 'factory-method',
        component: MethodFactoryComponent
      },
      {
        path: 'abstract-factory',
        component: AbstractFactoryComponent
      },
      {
        path: 'builder',
        component: BuilderComponent
      },
      {
        path: 'prototype',
        component: PrototypeComponent
      },
      {
        path: 'singleton',
        component: SingletonComponent
      },
      {
        path: 'bridge',
        component: BridgeComponent
      },
      {
        path: 'decorator',
        component: DecoratorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesingPatternpRoutingModule { }
