import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Welcome } from './welcome/welcome';
import { authGuard } from './auth-guard';

import { Dashboard } from './admin/dashboard/dashboard';
import { Vuelos } from './admin/vuelos/vuelos';
import { CrearVuelo } from './admin/crear-vuelo/crear-vuelo';

import { Dashboard as DashboardUsuario } from './usuario/dashboard/dashboard';
import { EditarVuelo } from './admin/editar-vuelo/editar-vuelo';

export const routes: Routes = [

  { 
    path: 'home', 
    component: Home, 
    canActivate: [authGuard] 
  },

  { 
    path: '', 
    component: Welcome 
  },

  {
    path: 'usuario',
    component: DashboardUsuario,
    canActivate: [authGuard]
  },

  { 
    path: 'admin',
    component: Dashboard
  },

  { 
    path: 'admin/vuelos',
    component: Vuelos 
  },
  
  {
  path: 'admin/crear-vuelo',
  component: CrearVuelo
  },

  {
  path:'admin/editar-vuelo/:id',
  component: EditarVuelo
}

];