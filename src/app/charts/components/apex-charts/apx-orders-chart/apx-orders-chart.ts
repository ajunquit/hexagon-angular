import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-apx-orders-chart',
  imports: [NgApexchartsModule],
  templateUrl: './apx-orders-chart.html',
  styleUrl: './apx-orders-chart.scss',
})
export class ApxOrdersChart {
  series: ApexAxisChartSeries = [{ name: 'Pedidos', data: [10, 12, 9, 18, 6, 32, 25] }];
  chart: ApexChart = { type: 'bar', height: 300 };
  xaxis: ApexXAxis = { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'] };
  title: ApexTitleSubtitle = { text: 'Pedidos por mes' };
}
