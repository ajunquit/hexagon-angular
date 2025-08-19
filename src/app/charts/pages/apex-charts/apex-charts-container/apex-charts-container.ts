import { Component } from '@angular/core';
import { ApxOrdersChart } from '../../../components/apex-charts/apx-orders-chart/apx-orders-chart';

@Component({
  selector: 'app-apex-charts-container',
  imports: [ApxOrdersChart],
  templateUrl: './apex-charts-container.html',
  styleUrl: './apex-charts-container.scss',
})
export class ApexChartsContainer {}
