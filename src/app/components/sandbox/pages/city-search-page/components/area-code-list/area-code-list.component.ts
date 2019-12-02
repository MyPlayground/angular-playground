import { Component, OnInit } from '@angular/core';
import { CitySearchService } from 'src/app/core/services';
import { CustomListOption } from 'src/app/shared/parts/custom-list/custom-list.model';
import { map, flatMap, toArray } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { CitySearchPageService } from '../../city-search-page.service';

@Component({
  selector: 'app-area-code-list',
  templateUrl: './area-code-list.component.html',
  styleUrls: ['./area-code-list.component.scss']
})
export class AreaCodeListComponent implements OnInit {
  items: CustomListOption[];

  constructor(private api: CitySearchService, private service: CitySearchPageService) {}

  ngOnInit() {
    this.api
      .getAreaCodeList()
      .pipe(
        flatMap(value => from(value)),
        map(value => {
          return { text: value.japanese, value: value.code } as CustomListOption;
        }),
        toArray<CustomListOption>()
      )
      .subscribe(value => (this.items = value));
  }

  onSelectionChange(value: string) {
    // 通知
    this.service.areaCode.next(value);
  }
}
