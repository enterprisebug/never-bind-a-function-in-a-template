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
    <ul class="social-buttons navbar-nav flex-row ml-md-auto d-none d-md-flex align-items-center">
    <!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/enterprisebug/never-bind-a-function-in-a-template" data-size="large" data-show-count="true" aria-label="Star enterprisebug/never-bind-a-function-in-a-template on GitHub">Star</a></ul>
  </header>

  `,
  styles: ['header.navbar { background: linear-gradient(135deg,#0143a3,#0273d4); } .social-buttons > iframe { margin-left: 0.75rem; }']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
