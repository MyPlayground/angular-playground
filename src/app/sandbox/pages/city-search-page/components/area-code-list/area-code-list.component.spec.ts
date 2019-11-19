import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCodeListComponent } from './area-code-list.component';

describe('AreaCodeListComponent', () => {
  let component: AreaCodeListComponent;
  let fixture: ComponentFixture<AreaCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
