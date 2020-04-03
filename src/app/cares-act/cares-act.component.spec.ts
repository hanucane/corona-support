import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaresActComponent } from './cares-act.component';

describe('CaresActComponent', () => {
  let component: CaresActComponent;
  let fixture: ComponentFixture<CaresActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaresActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaresActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
