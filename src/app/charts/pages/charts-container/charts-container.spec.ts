import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsContainer } from './charts-container';

describe('ChartsContainer', () => {
  let component: ChartsContainer;
  let fixture: ComponentFixture<ChartsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
