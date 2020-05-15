import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component'
import { AuthService } from '../../services/auth.service'

@Component({ 
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  buscar: string ='';
  usuario: string = "";
  prodServ:any;
  cargando:boolean=true;
  mensaje404:boolean=false;
  fono:string=''
  nombre:string=''

  constructor(private appService: AppService, private router: Router, private appComponent: AppComponent, public authService: AuthService) { }

  ngOnInit(): void {
    this.cargando=true;
    console.log('idRubro= '+this.appComponent.rubroUltimoProductoServicio)
    if (this.authService.loggedIn()) {
      var res = atob(localStorage.getItem('res'))
      var x = res.split("(*/as)");
      this.usuario = x[1]
    }
    if (this.appComponent.prodServ != "" && this.appComponent.rubroUltimoProductoServicio==-1){
      console.log('buscar prodServ desde search')
      this.getProductoServicioFromSearch()
      
    }
    if(this.appComponent.prodServ== "" && this.appComponent.rubroUltimoProductoServicio!=-1){
      console.log('buscar prodServ desde home')
      this.getProductoServicioFromHome()
      
    }
    if(this.appComponent.prodServ== "" && this.appComponent.rubroUltimoProductoServicio==-1){
      this.mensaje404=true;
      this.cargando=false;
    }
  }

  getProductoServicioFromSearch(){
    
     var data={
       id:this.appComponent.prodServ.id,
        Producto:this.appComponent.prodServ.Producto
     }
    console.log(data)
    
    this.appService.getProductoServicio(data.id,data).subscribe(res => {
      console.log(res);
      this.prodServ=res;
      console.log('producto o servicio en variable')
      console.log(this.prodServ)
      console.log(this.prodServ.text)
      if(this.prodServ.text!=undefined){
        console.log('no viene nada')
        this.mensaje404=true;
      }else{
        console.log('tiene algo')
        this.mensaje404=false;
        this.fono=this.prodServ.fonoContactoUno
      this.nombre=this.prodServ.nombre
      console.log('fono= '+this.fono)
      console.log('nombre= '+this.nombre)
      }
      this.cargando=false;
      
    },
      err => {
        console.log(err)
        this.mensaje404=true;
        this.cargando=false;
        
      }

    )
  }

  getProductoServicioFromHome(){
    
    var idRubro=this.appComponent.rubroUltimoProductoServicio;
   
   this.appService.getProductoServicioFromHome(idRubro).subscribe(res => {
     console.log(res);
     this.prodServ=res;
     console.log('producto o servicio en variable')
     console.log(this.prodServ)
     console.log(this.prodServ.text)
     if(this.prodServ.text!=undefined){
       console.log('no viene nada')
      this.mensaje404=true;
    }else{
      console.log('tengo algo')
      this.mensaje404=false;
      this.fono=this.prodServ.fonoContactoUno
      this.nombre=this.prodServ.nombre
      console.log('fono= '+this.fono)
      console.log('nombre= '+this.nombre)
    }
     this.cargando=false;
     
   },
     err => {
       console.log(err)
       this.mensaje404=true;
        this.cargando=false;
     }

   )
 }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  buscarEntidades(){
    console.log('buscar entidades')
    this.router.navigate(['/listado-entidades'])
  }

}
