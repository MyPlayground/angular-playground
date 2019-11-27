import { Component, OnInit } from '@angular/core';
import { CitySearchPageService } from './city-search-page.service';

@Component({
  selector: 'app-city-search-page',
  templateUrl: './city-search-page.component.html',
  styleUrls: ['./city-search-page.component.scss']
})
export class CitySearchPageComponent implements OnInit {
  constructor(private service: CitySearchPageService) {}

  ngOnInit() {}
}
