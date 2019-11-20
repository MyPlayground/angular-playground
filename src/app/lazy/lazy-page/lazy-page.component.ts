import { Component, OnInit } from '@angular/core';
import { CitySearchService } from 'src/app/core/services/city-search.service';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss']
})
export class LazyPageComponent implements OnInit {
  constructor(private service: CitySearchService) {}

  ngOnInit() {
    console.log(`LazyPageComponent: ${this.service._value}`);
    this.service._value = 'ghi';
    console.log(`LazyPageComponent: ${this.service._value}`);
  }
}
