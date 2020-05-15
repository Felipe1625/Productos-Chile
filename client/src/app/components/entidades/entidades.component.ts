import { Component, OnInit } from '@angular/core';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'
import { Router, RouterLink } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {
  usuario:string="";
  buscar:string=""
  list_entidades:any;
  cargando: boolean = true;
  constructor(private appService: AppService, private router: Router,public authService:AuthService,private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.cargando = true;
    this.getEntidades();
    this.cargando = false;
  }

  buscarPymePorEntidad(nombre:string){
    console.log('buscar por entidad')
    console.log(nombre)
    this.appComponent.entidad=nombre
    this.router.navigate(['/detalle-pyme'])
  }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    console.log(this.buscar.toLocaleLowerCase())
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  buscarEntidades(){
    console.log('buscar entidades')
    this.router.navigate(['/listado-entidades'])
  }

  getEntidades(){
    this.appService.getEntidades().subscribe(res => {
      console.log(res)
      this.list_entidades=res;
    },
      err => {
        console.log(err)
      }

    )
  }

}
