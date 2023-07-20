import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmascChartsComponent } from './bmasc-charts.component';

describe('BmascChartsComponent', () => {
  let component: BmascChartsComponent;
  let fixture: ComponentFixture<BmascChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmascChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmascChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
