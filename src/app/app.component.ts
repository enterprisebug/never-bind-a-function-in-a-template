import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Array<object>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe(res => {
      this.data = res;
    });
  }

}
