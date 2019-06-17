import { Component, OnInit, Input } from '@angular/core';
import { IBeer } from 'src/app/services/ibeer';

@Component({
  selector: 'app-pilsener',
  templateUrl: './pilsener.component.html',
  styles: []
})
export class PilsenerComponent implements OnInit {

  @Input() data: IBeer[] = [];
  pilsener: IBeer[] = [];

  constructor() { }

  ngOnInit() {
    this.data.forEach(beer => {
      if (this.checkForPilsener(beer)) {
        this.pilsener.push(beer)
      }
    });
  }

  checkForPilsener(beer: IBeer): boolean {
    console.log('checkForPilsener() called');
    return beer.name === 'Pilsener';
  }
}
