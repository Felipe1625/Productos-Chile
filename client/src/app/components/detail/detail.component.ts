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
      this.cargando=false;
      
    },
      err => {
        console.log(err)
      }

    )
  }

  getProductoServicioFromHome(){
    
    var idRubro=this.appComponent.rubroUltimoProductoServicio;
   
   this.appService.getProductoServicioFromHome(idRubro).subscribe(res => {
     console.log(res);
     this.prodServ=res;
     this.cargando=false;
     
   },
     err => {
       console.log(err)
     }

   )
 }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    this.router.navigate(['/busqueda-servicio-producto'])
  }
}
