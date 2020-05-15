import { Component, OnInit } from '@angular/core';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'
import { Router, RouterLink } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
  selector: 'app-politicas-de-uso',
  templateUrl: './politicas-de-uso.component.html',
  styleUrls: ['./politicas-de-uso.component.css']
})
export class PoliticasDeUsoComponent implements OnInit {
  buscar:string=""
  usuario:string="";
  constructor(private appService: AppService, private router: Router,public authService:AuthService,private appComponent:AppComponent) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.usuario=x[1]
    console.log(this.buscar)
  }
  }

  
  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    console.log(this.buscar.toLocaleLowerCase())
    this.router.navigate(['/busqueda-servicio-producto'])
  }

}
