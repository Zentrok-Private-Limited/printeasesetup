import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact').then(m => m.Contact),
  },
  {
    path: 'hp',
    loadComponent: () =>
      import('./hp/hp').then(m => m.Hp),
  },
  {
    path: 'canon',
    loadComponent: () =>
      import('./canon/canon').then(m => m.Canon),
  },
];
