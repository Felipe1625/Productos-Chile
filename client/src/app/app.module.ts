import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PanelPreguntasFrecuentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
