import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { PanelDatosPersonalesComponent } from './components/panel-datos-personales/panel-datos-personales.component';
import { PanelDatosEmpresarialesComponent } from './components/panel-datos-empresariales/panel-datos-empresariales.component';
import { PanelServiciosComponent } from './components/panel-servicios/panel-servicios.component';
import { PanelConfigOnePageComponent } from './components/panel-config-one-page/panel-config-one-page.component';
import { PanelPreguntasFrecuentesComponent } from './components/panel-preguntas-frecuentes/panel-preguntas-frecuentes.component';
import { AuthGuard } from './auth.guard';
import { NavbarClientComponent } from './components/navbar-client/navbar-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PymeComponent } from './components/pyme/pyme.component';
import { PanelDetallePreguntasFrecuentesComponent } from './components/panel-detalle-preguntas-frecuentes/panel-detalle-preguntas-frecuentes.component';
import { PanelChangePasswordComponent } from './components/panel-change-password/panel-change-password.component';
import { PoliticasDeUsoComponent } from './components/politicas-de-uso/politicas-de-uso.component';
import { PoliticasDeProductosComponent } from './components/politicas-de-productos/politicas-de-productos.component';
import { EntidadesComponent } from './components/entidades/entidades.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    LoginComponent,
    PanelPrincipalComponent,
    PanelDatosPersonalesComponent,
    PanelDatosEmpresarialesComponent,
    PanelServiciosComponent,
    PanelConfigOnePageComponent,
    PanelPreguntasFrecuentesComponent,
    NavbarClientComponent,
    PymeComponent,
    PanelDetallePreguntasFrecuentesComponent,
    PanelChangePasswordComponent,
    PoliticasDeUsoComponent,
    PoliticasDeProductosComponent,
    EntidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [AuthGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
