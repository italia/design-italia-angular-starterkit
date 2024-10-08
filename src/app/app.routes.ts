import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home.component'),
  },
  {
    path: 'istituzionale',
    loadChildren: () => import('@app/sites/istituzionale'),
  },
  {
    path: 'comune',
    loadChildren: () => import('@app/sites/comune'),
  },
  {
    path: 'scuola',
    loadChildren: () => import('@app/sites/scuola'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
