import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  beers: Array<object> = [
    { vendor: 'Eichbaum', name: 'UREICH' },
    { vendor: 'Eichbaum', name: 'Export' },
    { vendor: 'Eichbaum', name: 'Pilsener' },
    { vendor: 'Jever', name: 'Pilsener' },
    { vendor: 'Jever', name: 'Fun' },
    { vendor: 'Jever', name: 'Light' },
  ];

  constructor() { }

  get() {
    return of(this.beers);
  }
}
