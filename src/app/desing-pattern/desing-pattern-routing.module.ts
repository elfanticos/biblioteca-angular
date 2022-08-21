import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DesingPatternComponent } from './desing-pattern/desing-pattern.component';

const routes: Routes = [
  {
    path: 'home',
    component: DesingPatternComponent,
    children: [
      {
        path: 'strategy',
        component: StrategyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesingPatternpRoutingModule { }
