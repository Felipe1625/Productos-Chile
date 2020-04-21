import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  regiones:string[]=['XV Región de Arica y Parinacota','I Región de Tarapacá','II Región de Antofagasta','III Región de Atacama','IV Región de Coquimbo','V Región de Valparaíso','Región Metropolitana','VI Región del Libertador General Bernardo O’Higgins','VII Región del Maule','XVI Región de Ñuble','VIII Región del Biobío','IX Región de La Araucanía','XIV Región de Los Ríos','X Región de Los Lagos','XI Región Aysén del General Carlos Ibáñez del Campo','XII Región de Magallanes y Antártica Chilena']

  rubros:string[]=['informática','pasteleria']
  region:string='';
  rubro:string=""
  list_resultados: any;
  buscar: string = this.appComponent.busqueda;
  usuario: string = "";
  precio:string="";
  producto:boolean=true;
  servicio:boolean=true;
  constructor(private appService: AppService, private router: Router, private appComponent: AppComponent, public authService: AuthService) { }

  ngOnInit(): void {

    if (this.authService.loggedIn()) {
      var res = atob(localStorage.getItem('res'))
      var x = res.split("(*/as)");
      this.usuario = x[1]
    }

    if ((this.appComponent.busqueda != "" && this.appComponent.busqueda != undefined) && (this.appComponent.rubro == 0 && this.appComponent.rubro != undefined)) {
      console.log('trae los datos por nombre')
      this.getProductosServiciosPorNombre(0, this.appComponent.busqueda)
    } else {
      console.log('trae los datos por rubro')
      this.getProductosServiciosPorRubro(this.appComponent.rubro)
    }
  }



  getProductosServiciosPorNombre(num, busqueda) {
    var data
    if (num == 0) {
      data = {
        nombre: busqueda
      }
    } else {
      data = {
        nombre: this.buscar
      }
      
    }


    this.appService.getProductosServiciosPorNombre(data).subscribe(res => {
      console.log(res);
      this.list_resultados = res;

    },
      err => {
        console.log(err)
      }

    )
  }


  getProductosServiciosPorRubro(rubro) {
    var data = {
      rubro: rubro
    }
    this.appService.getProductosServiciosPorRubro(data).subscribe(res => {
      console.log(res);
      this.list_resultados = res;

    },
      err => {
        console.log(err)
      }

    )
  }


  buscarProductosServiciosPorFiltros() {
   
  console.log('region='+this.region);
  console.log('rubro= '+this.rubro);
  console.log('precio= '+this.precio);
  console.log('producto= '+this.producto);
  console.log('servicio= '+this.servicio);
  console.log('nombre= '+this.buscar)
  var data={
  region:this.region,
  rubro:this.rubro,
  precio:this.precio,
  producto:this.producto,
  servicio:this.servicio,
  nombre:this.buscar
}
  this.appService.getProductosServiciosPorFiltros(data).subscribe(res => {
    console.log(res);
    this.list_resultados = res;
  },
    err => {
      console.log(err)
    }

  )
  }

  getPrecio(event){
    console.log(event.target.id)
    this.precio=event.target.id;
  }

  getProducto(event){
    console.log(event)
    if(event.target.checked==true){
      this.producto=true
      console.log('prod checked')
    }else{
      this.producto=false
      console.log('prod no checked')
    }
  }

  getServicio(event){
    console.log(event)
    if(event.target.checked==true){
      this.servicio=true
      console.log('servicio checked')
    }else{
      this.servicio=false
      console.log('servicio no checked')
    }
  }


  verDetalle(item){
    console.log(item)
    this.appComponent.prodServ=item
    this.router.navigate(['/detalle-item'])
  }
}
