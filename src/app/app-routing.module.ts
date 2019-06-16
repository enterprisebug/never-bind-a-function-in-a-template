import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemComponent } from './problem/problem.component';
import { Solution1Component } from './solution1/solution1.component';

const routes: Routes = [
  { path: 'problem', component: ProblemComponent },
  { path: 'solution1', component: Solution1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
