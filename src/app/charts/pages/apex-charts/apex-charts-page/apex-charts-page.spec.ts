import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChartsPage } from './apex-charts-page';

describe('ApexChartsPage', () => {
  let component: ApexChartsPage;
  let fixture: ComponentFixture<ApexChartsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexChartsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexChartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
