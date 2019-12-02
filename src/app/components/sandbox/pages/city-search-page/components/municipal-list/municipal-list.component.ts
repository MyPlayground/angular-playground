import { Component, OnInit } from '@angular/core';
import { CustomListOption } from 'src/app/shared/parts/custom-list/custom-list.model';
import { CitySearchService } from 'src/app/core';
import { CitySearchPageService } from '../../city-search-page.service';
import { flatMap, map, toArray, catchError, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-municipal-list',
  templateUrl: './municipal-list.component.html',
  styleUrls: ['./municipal-list.component.scss']
})
export class MunicipalListComponent implements OnInit {
  items: CustomListOption[];

  constructor(private api: CitySearchService, private service: CitySearchPageService) {}

  ngOnInit() {
    this.service.areaCode
      .pipe(
        flatMap(code => this.api.getMunicipalList(code)),
        map(response => response.data),
        map(values => {
          return values.map(value => {
            return { text: value.name, value: value.id } as CustomListOption;
          });
        }),
        tap(value => console.log(value))
      )
      .subscribe(value => {
        console.log(value);
        this.items = value;
      });
  }
}
