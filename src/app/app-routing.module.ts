import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemComponent } from './components/problem/problem.component';
import { Solution1Component } from './components/solution1/solution1.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'solution1', component: Solution1Component },
  { path: '**', component: HomeComponent } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
