import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalListComponent } from './municipal-list.component';

describe('MunicipalListComponent', () => {
  let component: MunicipalListComponent;
  let fixture: ComponentFixture<MunicipalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
