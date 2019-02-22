import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParcelComponent } from './register-parcel.component';

describe('RegisterParcelComponent', () => {
  let component: RegisterParcelComponent;
  let fixture: ComponentFixture<RegisterParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
