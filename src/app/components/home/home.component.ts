import { Component, OnInit } from '@angular/core';
import { IBeer } from 'src/app/services/ibeer';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['code { white-space: pre; }']
})
export class HomeComponent implements OnInit {

  data: Array<IBeer>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe(res => {
      this.data = res;
    });
  }

}
