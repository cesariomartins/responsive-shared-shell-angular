import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWithStepsComponent } from './checkout-with-steps.component';

describe('CheckoutWithStepsComponent', () => {
  let component: CheckoutWithStepsComponent;
  let fixture: ComponentFixture<CheckoutWithStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutWithStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutWithStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
