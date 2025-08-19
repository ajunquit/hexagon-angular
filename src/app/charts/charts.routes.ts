import { Routes } from '@angular/router';

export const chartsRoutes: Routes = [
  {
    path: 'charts/apex-charts',
    loadComponent: () =>
      import('./pages/apex-charts/apex-charts-page/apex-charts-page').then((m) => m.ApexChartsPage),
  },
];
