import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 * providedIn はサービス側から適用するモジュールを指定する
 * providers はモジュール/コンポーネント側から注入するサービスを指定する
 * @see http://neos21.hatenablog.com/entry/2017/07/30/080000
 */
@Injectable()
export class CitySearchService {
  private static readonly AREA_CODE_LIST = [
    {
      code: '01',
      japanese: '北海道',
      english: 'Hokkaido'
    },
    {
      code: '01',
      japanese: '北海道',
      english: 'Hokkaido'
    },
    {
      code: '01',
      japanese: '北海道',
      english: 'Hokkaido'
    }
  ];

  public _value: string;

  constructor() {}

  getAreaCodeList() {
    return of(CitySearchService.AREA_CODE_LIST);
  }
}
