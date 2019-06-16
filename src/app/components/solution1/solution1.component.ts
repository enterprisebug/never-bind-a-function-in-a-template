import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IBeer } from '../../services/ibeer';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html'
})
export class Solution1Component implements OnInit {

  data: Array<IBeer>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe(res => {
      this.data = res;
    });
  }

}
