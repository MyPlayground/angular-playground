import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchPageComponent } from './city-search-page.component';

describe('CitySearchPageComponent', () => {
  let component: CitySearchPageComponent;
  let fixture: ComponentFixture<CitySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
