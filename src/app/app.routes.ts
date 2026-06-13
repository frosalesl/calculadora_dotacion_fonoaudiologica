import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Cambiado para que al abrir la app arranque en el Login
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'dofo',
    loadComponent: () => import('./pages/dofo/dofo.page').then( m => m.DofoPage)
  },
  {
    path: '**',
    redirectTo: 'login', // Si escriben cualquier ruta inválida, los manda al login
  }
];
