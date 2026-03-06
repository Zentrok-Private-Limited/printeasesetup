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
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy').then(m => m.PrivacyPolicy),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./terms-and-conditions/terms-and-conditions').then(m => m.TermsAndConditions),
  },
  {
    path: 'disclaimer',
    loadComponent: () =>
      import('./disclaimer/disclaimer').then(m => m.Disclaimer),
  },
];
