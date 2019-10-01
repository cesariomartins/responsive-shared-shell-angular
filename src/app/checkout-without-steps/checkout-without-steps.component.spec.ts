import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWithoutStepsComponent } from './checkout-without-steps.component';

describe('CheckoutWithoutStepsComponent', () => {
  let component: CheckoutWithoutStepsComponent;
  let fixture: ComponentFixture<CheckoutWithoutStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutWithoutStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutWithoutStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
