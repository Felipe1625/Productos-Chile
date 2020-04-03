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

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'search',
    component : SearchComponent
  },
  {
    path:'detail',
    component : DetailComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'panel',
    component : PanelPrincipalComponent
  },
  {
    path:'panel/datos-personales',
    component : PanelDatosPersonalesComponent
  },
  {
    path:'panel/datos-empresariales',
    component : PanelDatosEmpresarialesComponent
  },
  {
    path:'panel/servicios-productos',
    component : PanelServiciosComponent
  },
  {
    path:'panel/config',
    component : PanelConfigOnePageComponent
  },
  {
    path:'panel/preguntas-frecuentes',
    component : PanelPreguntasFrecuentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }