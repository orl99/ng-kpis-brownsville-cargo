import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bmasc-charts',
  templateUrl: './bmasc-charts.component.html',
  styleUrls: ['./bmasc-charts.component.scss']
})
export class BmascChartsComponent implements OnInit, AfterViewInit {
  // Input Data
  @Input() InChartData: ChartDataSets[] = [];
  @Input() InChartType: ChartType;
  @Input() InLegend: boolean;
  @Input() InColors: Color[];
  @Input() InPptions: (ChartOptions & { annotation: any });
  @Input() InLabels: Label[];

  // Dom Charts
  @ViewChild('DomCanvas', {static: false}) canvas: ElementRef;


  // Chart options and data
  public chartData: ChartDataSets[];
  public chartType: ChartType;
  public legend: boolean;
  public colors: Color[];
  public labels: Label[];
  public options: (ChartOptions);

  constructor() {
    this.options = {
      responsive: true,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: false,
          offset: true,
          ticks: {
            min: 100,
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            min: 0,
          }
        }],
      }
    };
  }

  ngOnInit(): void {
    this.chartData = this.InChartData;
    this.chartType = this.InChartType;
    this.legend = this.InLegend;
    this.colors = this.InColors;
    // this.options = this.InPptions;
    this.labels = this.InLabels;
    console.log(this.InLabels);
  }

  ngAfterViewInit() {
    const domCanvasAccess = this.canvas.nativeElement as HTMLCanvasElement;
    const width = window.innerWidth || document.body.clientWidth;
  }

}
