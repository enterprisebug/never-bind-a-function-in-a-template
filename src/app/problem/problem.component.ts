import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IBeer } from '../services/ibeer';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html'
})
export class ProblemComponent implements OnInit {

  data: Array<IBeer>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe(res => {
      this.data = res;
    });
  }

  checkForPilsener(beer: IBeer): boolean {
    console.log('checkForPilsener() called');
    return beer.name === 'Pilsener';
  }

  clickMe() {

  }
}
