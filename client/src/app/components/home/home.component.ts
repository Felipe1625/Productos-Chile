import { Component, OnInit } from '@angular/core';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'
import { Router, RouterLink } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario:string="";
  Email= {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  buscar:string=""

  constructor(private appService: AppService, private router: Router,public authService:AuthService,private appComponent:AppComponent) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.usuario=x[1]
    console.log(this.buscar)
    }
  }

  sendEmailUser(){
  console.log(this.Email)
    this.appService.sendEmailUser(this.Email).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
  }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  buscarProductosServiciosPorRubro(num){
    console.log(this.buscar)
    this.appComponent.rubro=num
    this.router.navigate(['/busqueda-servicio-producto'])
  }

}
