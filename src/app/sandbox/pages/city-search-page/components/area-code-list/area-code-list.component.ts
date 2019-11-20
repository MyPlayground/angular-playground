import { Component, OnInit } from '@angular/core';
import { CitySearchService } from 'src/app/core/services/city-search.service';

@Component({
  selector: 'app-area-code-list',
  templateUrl: './area-code-list.component.html',
  styleUrls: ['./area-code-list.component.scss']
})
export class AreaCodeListComponent implements OnInit {
  items: string[] = ['aaa', 'bbb', 'ccc'];

  constructor(private service: CitySearchService) {}

  ngOnInit() {
    console.log(`AreaCodeListComponent: ${this.service._value}`);
    this.service._value = 'def';
    console.log(`AreaCodeListComponent: ${this.service._value}`);
  }
}
