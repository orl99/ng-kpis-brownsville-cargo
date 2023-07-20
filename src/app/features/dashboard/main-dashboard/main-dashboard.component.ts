import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  // Mocks for primera
  chartMockData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Entradas' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Salidas' }
  ];
  selectMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  showLegend = true;
  chart2MockDataPt1 = [
    { data: [204], label: 'Paqueteria' },
    { data: [309], label: 'Consolidado' },
    { data: [173], label: 'Cajas D.' },
    { data: [134], label: 'Furgon' }
  ];
  chartMockLabel = ['Entradas', 'Salidas'];
  chart2MockDataPt2 = [
    { data: [300], label: 'Paqueteria' },
    { data: [309], label: 'Consolidado' },
    { data: [260], label: 'Cajas D.' },
    { data: [260], label: 'Furgon' }
  ];
  chart2MockDataPt3 = [
    { data: [290], label: 'Paqueteria' },
    { data: [315], label: 'Consolidado' },
    { data: [222], label: 'Cajas D.' },
    { data: [268], label: 'Furgon' }
  ];
  chart3MockData = [{ data: [16, 21, 25, 38] }];
  chart3MockDataLabels = [
    'Paqueteria',
    'Consolidado',
    'Cajas D.',
    'Furgon',
  ];
  labelsx = [
    'Paqueteria',
    'Consolidado',
    'Cajas D.',
    'Furgon',
  ];
  chart4MockData = [
    { data: [158, 260, 100, 251], label: 'Enero' },
    { data: [168, 347, 135, 176], label: 'Febrero' },
    { data: [204, 309, 173, 134], label: 'Marzo' }
  ];

  chart5MockDataPt1 = [
    { data: [Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];
  chart5MockDataPt2 = [
    { data: [ Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];
  chart5MockDataPt3 = [
    { data: [Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];

  chart6MockDataPt1 = [
    { data: [Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];
  chart6MockDataPt2 = [
    { data: [ Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];
  chart6MockDataPt3 = [
    { data: [ Math.floor(Math.random() * 100) * 100 ], label: 'H. Totales' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Autorizadas' },
    { data: [Math.floor(Math.random() * 100) * 100], label: 'Interna' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
