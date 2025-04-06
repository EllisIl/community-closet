import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCounterComponent } from './donation-counter.component';

describe('DonationCounterComponent', () => {
  let component: DonationCounterComponent;
  let fixture: ComponentFixture<DonationCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
