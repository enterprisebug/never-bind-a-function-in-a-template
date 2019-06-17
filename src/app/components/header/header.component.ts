import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="navbar navbar-expand navbar-dark px-4 flex-column flex-md-row">
  <div class="navbar-nav-scroll">
    <ul class="navbar-nav flex-row">
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" [routerLink]="['/home']">Home</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" [routerLink]="['/problem']">Problem</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" [routerLink]="['/solution1']">Solution 1</a>
      </li>
    </ul>
  </div>
</header>

  `,
  styles: ['header.navbar { background: linear-gradient(135deg,#0143a3,#0273d4); }']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
