import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxOrdersChart } from './apx-orders-chart';

describe('ApxOrdersChart', () => {
  let component: ApxOrdersChart;
  let fixture: ComponentFixture<ApxOrdersChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApxOrdersChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApxOrdersChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
