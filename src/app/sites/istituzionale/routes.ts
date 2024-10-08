import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./layouts/istituzionale/istituzionale.layout'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component'),
      },
      {
        path: 'document',
        loadComponent: () => import('./features/document/document.component'),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./features/typography/typography.component'),
      },
      {
        path: 'form',
        loadComponent: () => import('./features/form/form.component'),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
] satisfies Routes;
