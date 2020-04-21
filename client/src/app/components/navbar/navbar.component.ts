import { Component, OnInit } from '@angular/core';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'
import {AppComponent} from '../../app.component'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:string="";
  buscar:string=""
  constructor(private appService: AppService,public authService:AuthService,private appComponent:AppComponent,private router: Router) { }

  ngOnInit(): void {
    this.buscar=this.appComponent.busqueda
    if(this.authService.loggedIn()){
      var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.usuario=x[1]
    }
  }
  buscarProductosServiciosPorNombre(){
    if(this.buscar!==""  && this.buscar!==undefined){
      console.log(this.buscar)
      this.appComponent.busqueda=this.buscar
      this.buscar=""
      console.log(this.router.url)
      if(this.router.url=='/home'){
        console.log('esta en home')
        this.router.navigate(['/busqueda-servicio-producto'])
      }else{
      console.log('esta en resultados')
      this.getProductosServiciosPorNombre(this.appComponent.busqueda)
      this.appComponent.busqueda=""
      }
      
      
    }else{
      console.log('buscar vacio en navbar')
      console.log(this.buscar)
    }
    
  }


  getProductosServiciosPorNombre(busqueda){
    var data={
      nombre:busqueda
    }
    this.appService.getProductosServiciosPorNombre(data).subscribe(res => {
      console.log(res);
      this.appComponent.resultados=res;
    },
      err => {
        console.log(err)
      }
  
    )
  }
  

}
