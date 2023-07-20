import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmascChartsComponent } from './components/bmasc-charts/bmasc-charts.component';

// ng-charts-module
import { ChartsModule } from 'ng2-charts';

const sharedComponents = [
  BmascChartsComponent
];

@NgModule({
  declarations: [BmascChartsComponent],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
