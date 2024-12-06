import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsResumeComponent } from './order-details-resume.component';

describe('OrderDetailsResumeComponent', () => {
  let component: OrderDetailsResumeComponent;
  let fixture: ComponentFixture<OrderDetailsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailsResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
