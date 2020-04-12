import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service'

@Component({
  selector: 'app-panel-datos-personales',
  templateUrl: './panel-datos-personales.component.html',
  styleUrls: ['./panel-datos-personales.component.css']
})
export class PanelDatosPersonalesComponent implements OnInit {

  constructor(private appService:AppService) { }


  data :any;
  idUsuario:any;
  response:any;
  mensajeCorreo:string="";
  mensajeDireccion:string="";
  mensajeCelular:string="";

  ngOnInit(): void {
    var res=atob(localStorage.getItem('res'))
    this.idUsuario=res.split("(*/as)");
    this.getUsuario(this.idUsuario[0])
  }

  // correoChange($event: Event) {
    
  //   if (this.repetirpasswordlargo.length == 0) {
      
  //   } else {
      
  //   }
  //   this.HabilitarButton();
  // }


  updateDatosUsuario() {
    console.log('inicio')
// var ex=/^([0-9])*$/
var error=0;
var ex;

if(this.data.correo.length==0){
  this.mensajeCorreo='Campo obligatorio';
  error++;
 }else{
  ex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  if(!(ex.test(this.data.correo))){
    this.mensajeCorreo='Formato algo@algo.es';
    error++;
    }else{
      this.mensajeCorreo='';
    }
 }

if(this.data.celular.length==0){
  this.mensajeCelular='Campo obligatorio';
  error++;
 }else{
  ex=/^[9]{1}[1-9]{8}$/
  if(!(ex.test(this.data.celular))){
    this.mensajeCelular='Formato 9xxxxxxxx';
    error++;
    }else{
      this.mensajeCelular=''
    }
 }

 if(this.data.direccion.length==0){
  this.mensajeDireccion='Campo obligatorio';
  error++;
 }else{
  if(this.data.direccion.length>100){
    this.mensajeDireccion='Maximo 70 caracteres';
    error++;
  }else{
    this.mensajeDireccion=''
  }
 }



if(error!=0){
  console.log('error en uno o mas campos')
 return 
}

    var data={
      correo:this.data.correo,
      celular:this.data.celular,
      direccion:this.data.direccion
    }



    this.appService.updateDatosUsuario(this.idUsuario[0],data).subscribe(res => {
      console.log(res);
      
    },
      err => {
        console.log(err)
      }

    )
  }

  getUsuario(id:string){
    
    this.appService.getUsuario(id).subscribe(res=>{
      console.log(res)
      // this.response=res
      //this.data=this.response;
      this.data=res
      console.log('el valor de data es')
      console.log(this.data);
      // console.log('el nombre es= '+this.data.NombreUsuario)
    },
    err=>{
      console.log(err)
    }
    
    )

    
  }

}
