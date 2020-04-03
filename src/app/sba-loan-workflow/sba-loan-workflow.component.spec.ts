import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbaLoanWorkflowComponent } from './sba-loan-workflow.component';

describe('SbaLoanWorkflowComponent', () => {
  let component: SbaLoanWorkflowComponent;
  let fixture: ComponentFixture<SbaLoanWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbaLoanWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbaLoanWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
