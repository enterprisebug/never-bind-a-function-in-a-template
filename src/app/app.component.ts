import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <section class="row py-5 px-2 px-md-4 px-lg-5">
      <div class="col-12 col-xl-9">
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  styles: []
})
export class AppComponent {

}
