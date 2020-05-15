import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//pantalla principal
import {HomeComponent} from './components/home/home.component'
//busqueda 
import {SearchComponent} from './components/search/search.component'
//detalle de un producto/servicio
import {DetailComponent} from './components/detail/detail.component'
//login para clientes
import {LoginComponent} from './components/login/login.component'


//seccion de cliente
//seccion principal del panel de cliente
import {PanelPrincipalComponent} from './components/panel-principal/panel-principal.component'
//seccion de datos personales de un cliente
import {PanelDatosPersonalesComponent} from './components/panel-datos-personales/panel-datos-personales.component'
//seccion de datos empresariales de un cliente
import {PanelDatosEmpresarialesComponent} from './components/panel-datos-empresariales/panel-datos-empresariales.component'
//seccion de servicios y productos de un cliente
import {PanelServiciosComponent} from './components/panel-servicios/panel-servicios.component'
//seccion de configuracion de one page de un cliente
import {PanelConfigOnePageComponent} from './components/panel-config-one-page/panel-config-one-page.component'
//seccion de preguntas frecuentes para un cliente del sistema
import {PanelPreguntasFrecuentesComponent} from './components/panel-preguntas-frecuentes/panel-preguntas-frecuentes.component'
import { AuthGuard } from './auth.guard';
import { PymeComponent } from './components/pyme/pyme.component';
import { PanelDetallePreguntasFrecuentesComponent } from './components/panel-detalle-preguntas-frecuentes/panel-detalle-preguntas-frecuentes.component';
import { PanelChangePasswordComponent } from './components/panel-change-password/panel-change-password.component';
import { PoliticasDeUsoComponent } from './components/politicas-de-uso/politicas-de-uso.component';
import { PoliticasDeProductosComponent } from './components/politicas-de-productos/politicas-de-productos.component';
import { EntidadesComponent } from './components/entidades/entidades.component';

const routes: Routes = [
  {
    path:'',
    // redirectTo:'/home',
    pathMatch:'full',
    component : HomeComponent
  },
  
  // {
  //   path:'home',
  //   component : HomeComponent
  // },
  {
    path:'busqueda-servicio-producto',
    pathMatch:'full',
    component : SearchComponent
  },
  {
    path:'detalle-pyme',
    pathMatch:'full',
    component : PymeComponent
  },
  {
    path:'listado-entidades',
    pathMatch:'full',
    component : EntidadesComponent
  },
  {
    path:'detalle-item',
    pathMatch:'full',
    component : DetailComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component : LoginComponent
  },
  {
    path:'politicas-de-uso',
    pathMatch:'full',
    component : PoliticasDeUsoComponent
  },
  {
    path:'politicas-de-productos',
    pathMatch:'full',
    component : PoliticasDeProductosComponent
  },
  {
    path:'panel',
    pathMatch:'full',
    component : PanelPrincipalComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/datos-personales',
    pathMatch:'full',
    component : PanelDatosPersonalesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/cambiar-contraseña',
    pathMatch:'full',
    component : PanelChangePasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/datos-empresariales',
    pathMatch:'full',
    component : PanelDatosEmpresarialesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/servicios-productos',
    pathMatch:'full',
    component : PanelServiciosComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/config',
    pathMatch:'full',
    component : PanelConfigOnePageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/preguntas-frecuentes',
    pathMatch:'full',
    component : PanelPreguntasFrecuentesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'panel/detalle-preguntas-frecuentes',
    pathMatch:'full',
    component : PanelDetallePreguntasFrecuentesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
