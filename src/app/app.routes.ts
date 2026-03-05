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
    path: 'printer/:name',
    loadComponent: () =>
      import('./printer/printer').then(m => m.Printer),
  }

  // {
  //   path: 'hp',
  //   loadComponent: () =>
  //     import('./hp/hp').then(m => m.Hp),
  // },
  // {
  //   path: 'canon',
  //   loadComponent: () =>
  //     import('./canon/canon').then(m => m.Canon),
  // },
  // {
  //   path: 'epson',
  //   loadComponent: () =>
  //     import('./epson/epson').then(m => m.Epson),
  // },
  // {
  //   path: 'brother',
  //   loadComponent: () =>
  //     import('./brother/brother').then(m => m.Brother),
  // },
  // {
  //   path: 'printer/driver',
  //   loadComponent: () =>
  //     import('./driver/driver').then(m => m.Driver),
  // },
  // {
  //   path: 'printer/install',
  //   loadComponent: () =>
  //     import('./installer/installer').then(m => m.Installer),
  // },
];
