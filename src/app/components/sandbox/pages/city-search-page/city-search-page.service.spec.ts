import { TestBed } from '@angular/core/testing';

import { CitySearchPageService } from './city-search-page.service';

describe('CitySearchPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitySearchPageService = TestBed.get(CitySearchPageService);
    expect(service).toBeTruthy();
  });
});
