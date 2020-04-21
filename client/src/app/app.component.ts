import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  busqueda="";
  resultados:any;
  rubro:number=0;
  prodServ:any;
}
