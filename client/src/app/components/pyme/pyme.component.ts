import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component'
import { Router, RouterLink } from '@angular/router';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-pyme',
  templateUrl: './pyme.component.html',
  styleUrls: ['./pyme.component.css']
})
export class PymeComponent implements OnInit {
  buscar:string=""
  usuario:string="";
  constructor(private appComponent:AppComponent, private router: Router,private appService: AppService,public authService:AuthService) { }
  entidad:string="";
  listPymes:any;
  desEntidad:string="";
  cargando:boolean=true;
  ngOnInit(): void {
    this.cargando=true;
  this.entidad=this.appComponent.entidad;
if(this.entidad!=""){
  this.getPymesPorEntidad()
}
  }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    console.log(this.buscar.toLocaleLowerCase())
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  getPymesPorEntidad(){
console.log(this.entidad)
this.appService.getPymesPorEntidad(this.entidad).subscribe(
  res => {
    
    this.listPymes=res;
    console.log(this.listPymes)
    this.desEntidad=this.listPymes[0].desEntidad
    this.cargando=false;
  },
  err => console.error(err)
);
  }

}
