import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * providedIn はサービス側から適用するモジュールを指定する
 * providers はモジュール/コンポーネント側から注入するサービスを指定する
 * @see http://neos21.hatenablog.com/entry/2017/07/30/080000
 */
@Injectable()
export class CitySearchService {
  constructor(private http: HttpClient) {}

  // http://www.land.mlit.go.jp/webland/api.html
  getAreaCodeList() {
    return this.http.get<{ code: string; japanese: string; english: string }[]>('assets/area-code-list.json');
  }
}
