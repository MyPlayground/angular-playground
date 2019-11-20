import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  private static readonly AREA_CODE_LIST = [
    {
      code: '01',
      japanese: '北海道',
      english: 'Hokkaido'
    }
  ];

  public _value: string;

  constructor() {}

  getAreaCodeList() {
    return from(CitySearchService.AREA_CODE_LIST);
  }
}
