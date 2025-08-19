import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChartsContainer } from './apex-charts-container';

describe('ApexChartsContainer', () => {
  let component: ApexChartsContainer;
  let fixture: ComponentFixture<ApexChartsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexChartsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexChartsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
