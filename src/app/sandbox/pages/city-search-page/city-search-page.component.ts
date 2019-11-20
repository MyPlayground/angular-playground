import { Component, OnInit } from '@angular/core';
import { CitySearchService } from 'src/app/core/services/city-search.service';

@Component({
  selector: 'app-city-search-page',
  templateUrl: './city-search-page.component.html',
  styleUrls: ['./city-search-page.component.scss']
})
export class CitySearchPageComponent implements OnInit {
  constructor(private service: CitySearchService) {}

  ngOnInit() {}
}
