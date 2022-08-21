import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: 'desing_pattern',
  loadChildren: () => import('./desing-pattern/desing-pattern.module').then(mod => mod.DesingPatternModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
