import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import { Solution1Component } from './solution1/solution1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    Solution1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
