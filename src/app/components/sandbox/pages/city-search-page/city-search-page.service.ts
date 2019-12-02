import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CitySearchPageService {
  areaCode: BehaviorSubject<string> = new BehaviorSubject<string>('01');

  constructor() {}
}
