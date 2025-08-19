import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { authGuard } from './auth/guards/auth.guard';
import { chartsRoutes } from './charts/charts.routes';
import { customersRoutes } from './customers/customers.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { itemsRoutes } from './items/items.routes';
import { MainLayout } from './layout/components/main-layout/main-layout';
import { ordersRoutes } from './orders/orders.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayout,
    children: [
      ...dashboardRoutes,
      ...customersRoutes,
      ...itemsRoutes,
      ...ordersRoutes,
      ...chartsRoutes,
    ],
    canActivate: [authGuard],
  },
  ...authRoutes,
  { path: '**', redirectTo: 'dashboard' },
];
