import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './components/strategy/strategy.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';
import { MethodFactoryComponent } from './creational/method-factory/method-factory.component';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';

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
        component : MethodFactoryComponent
      },
      {
        path: 'abstract-factory',
        component : AbstractFactoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesingPatternpRoutingModule { }
