import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDistanceComponent } from './city-distance.component';

describe('CityDistanceComponent', () => {
  let component: CityDistanceComponent;
  let fixture: ComponentFixture<CityDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
