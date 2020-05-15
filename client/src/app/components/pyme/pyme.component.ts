import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { Router, RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-pyme',
  templateUrl: './pyme.component.html',
  styleUrls: ['./pyme.component.css']
})
export class PymeComponent implements OnInit {
  buscar: string = ""
  usuario: string = "";
  constructor(private appComponent: AppComponent, private router: Router, private appService: AppService, public authService: AuthService) { }
  entidad: string = "";
  listPymes: any;
  desEntidad: string = "";
  cardNoPyme:boolean=false;
  cargando: boolean = true;
  ngOnInit(): void {
    this.cargando = true;
    this.entidad = this.appComponent.entidad;
    if (this.entidad != "") {
      this.getPymesPorEntidad()
     
    }else{
      this.cardNoPyme=true;
    }
    this.cargando = false;
  }

  buscarProductosServiciosPorNombre() {
    console.log(this.buscar)
    this.appComponent.busqueda = this.buscar.toLocaleLowerCase()
    console.log(this.buscar.toLocaleLowerCase())
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  getPymesPorEntidad() {
    console.log(this.entidad)
    this.appService.getPymesPorEntidad(this.entidad).subscribe(
      res => {

        this.listPymes = res;
        console.log(this.listPymes)
        
        if(this.listPymes.length <= 0){
          this.cardNoPyme=true;
        }else{
          this.desEntidad = this.listPymes[0].desEntidad
        }
      },
      err =>{
        console.error(err)
        
      } 

    );
  }

  
  buscarEntidades(){
    console.log('buscar entidades')
    this.router.navigate(['/listado-entidades'])
  }

}
