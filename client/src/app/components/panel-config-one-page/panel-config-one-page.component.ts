import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AppService} from '../../services/app.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panel-config-one-page',
  templateUrl: './panel-config-one-page.component.html',
  styleUrls: ['./panel-config-one-page.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
  
})
export class PanelConfigOnePageComponent implements OnInit {
  alertaPSSubidas1_10=false;
  alertaPSSubidas10_20=false;
  alertaPSSubidas20_30=false;
  btnSiguientePS=false;
  subiendoimagenesCabecera=false;
  imagenesCabeceraSubidas=false;

  subiendoimagenesCaracteristicas=false;
  imagenesCaracteristicasSubidas=false;

  subiendoimagenPyme=false;
  imagenPymeSubida=false;

  subiendoimagenes_PS_NoAlmacen=false;
  imagen_PS_NoAlmacenSubida=false;

  subiendoimagenes_PS_Almacen10=false;
  imagen_PS_Almacen10Subida=false;

  subiendoimagenes_PS_Almacen20=false;
  imagen_PS_Almacen20Subida=false;

  subiendoimagenes_PS_Almacen30=false;
  imagen_PS_Almacen30Subida=false;



  prodServ0_10=true;
  prodServ10_20=false;
  prodServ20_30=false;



  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  imagenCabecera: Array<File>;
  imagenCabecera2: Array<File>;
  imagenCabecera3: Array<File>;
  imagenCaracteristicas: Array<File>;
  infoCaracteristicas:string=""
  imagenCaracteristicas2: Array<File>;
  infoCaracteristicas2:string=""
  imagenCaracteristicas3: Array<File>;
  infoCaracteristicas3:string=""
  imagenPyme: Array<File>;
  infoPyme:string=""
  imagenProdserv: Array<File>;
  infoProdserv:string=""
  imagenProdserv2: Array<File>;
  infoProdserv2:string=""
  imagenProdserv3: Array<File>;
  infoProdserv3:string=""

  imagenProdserv4: Array<File>;
  infoProdserv4:string=""
  imagenProdserv5: Array<File>;
  infoProdserv5:string=""
  imagenProdserv6: Array<File>;
  infoProdserv6:string=""
  imagenProdserv7: Array<File>;
  infoProdserv7:string=""
  imagenProdserv8: Array<File>;
  infoProdserv8:string=""
  imagenProdserv9: Array<File>;
  infoProdserv9:string=""
  imagenProdserv10: Array<File>;
  infoProdserv10:string=""
  imagenProdserv11: Array<File>;
  infoProdserv11:string=""
  imagenProdserv12: Array<File>;
  infoProdserv12:string=""


  imagenProdservAlmacen: Array<File>;
  infoProdservAlmacen:string=""
  imagenProdservAlmacen2: Array<File>;
  infoProdservAlmacen2:string=""
  imagenProdservAlmacen3: Array<File>;
  infoProdservAlmacen3:string=""
  imagenProdservAlmacen4: Array<File>;
  infoProdservAlmacen4:string=""
  imagenProdservAlmacen5: Array<File>;
  infoProdservAlmacen5:string=""
  imagenProdservAlmacen6: Array<File>;
  infoProdservAlmacen6:string=""
  imagenProdservAlmacen7: Array<File>;
  infoProdservAlmacen7:string=""
  imagenProdservAlmacen8: Array<File>;
  infoProdservAlmacen8:string=""
  imagenProdservAlmacen9: Array<File>;
  infoProdservAlmacen9:string=""
  imagenProdservAlmacen10: Array<File>;
  infoProdservAlmacen10:string=""
  imagenProdservAlmacen11: Array<File>;
  infoProdservAlmacen11:string=""
  imagenProdservAlmacen12: Array<File>;
  infoProdservAlmacen12:string=""
  imagenProdservAlmacen13: Array<File>;
  infoProdservAlmacen13:string=""
  imagenProdservAlmacen14: Array<File>;
  infoProdservAlmacen14:string=""
  imagenProdservAlmacen15: Array<File>;
  infoProdservAlmacen15:string=""
  imagenProdservAlmacen16: Array<File>;
  infoProdservAlmacen16:string=""
  imagenProdservAlmacen17: Array<File>;
  infoProdservAlmacen17:string=""
  imagenProdservAlmacen18: Array<File>;
  infoProdservAlmacen18:string=""
  imagenProdservAlmacen19: Array<File>;
  infoProdservAlmacen19:string=""
  imagenProdservAlmacen20: Array<File>;
  infoProdservAlmacen20:string=""
  imagenProdservAlmacen21: Array<File>;
  infoProdservAlmacen21:string=""
  imagenProdservAlmacen22: Array<File>;
  infoProdservAlmacen22:string=""
  imagenProdservAlmacen23: Array<File>;
  infoProdservAlmacen23:string=""
  imagenProdservAlmacen24: Array<File>;
  infoProdservAlmacen24:string=""
  imagenProdservAlmacen25: Array<File>;
  infoProdservAlmacen25:string=""
  imagenProdservAlmacen26: Array<File>;
  infoProdservAlmacen26:string=""
  imagenProdservAlmacen27: Array<File>;
  infoProdservAlmacen27:string=""
  imagenProdservAlmacen28: Array<File>;
  infoProdservAlmacen28:string=""
  imagenProdservAlmacen29: Array<File>;
  infoProdservAlmacen29:string=""
  imagenProdservAlmacen30: Array<File>;
  infoProdservAlmacen30:string=""


  formContacto:any=""
  idUsuario: any;

  infoc:Blob;
  infoc2:Blob;
  infoc3:Blob;
  infop:Blob;
  infops:Blob;
  infops2:Blob;
  infops3:Blob;

  form: FormGroup;
  // imagen:string="data:image/png;base64,"+this.base64
  // im:any=this.sanitizer.bypassSecurityTrustResourceUrl(this.imagen);
  mensajeImagenCabecera:string="Imagen no subida"
  mensajeImagenCabecera2:string="Imagen no subida"
  mensajeImagenCabecera3:string="Imagen no subida"
  mensajeImagenCaracteristica:string="Imagen no subida"
  mensajeImagenCaracteristica2:string="Imagen no subida"
  mensajeImagenCaracteristica3:string="Imagen no subida"
  mensajeImagenPyme:string="Imagen no subida"
  mensajeImagenProdServ:string="Imagen no subida"
  mensajeImagenProdServ2:string="Imagen no subida"
  mensajeImagenProdServ3:string="Imagen no subida"
  mensajeImagenProdServ4:string="Imagen no subida"
  mensajeImagenProdServ5:string="Imagen no subida"
  mensajeImagenProdServ6:string="Imagen no subida"
  mensajeImagenProdServ7:string="Imagen no subida"
  mensajeImagenProdServ8:string="Imagen no subida"
  mensajeImagenProdServ9:string="Imagen no subida"
  mensajeImagenProdServ10:string="Imagen no subida"
  mensajeImagenProdServ11:string="Imagen no subida"
  mensajeImagenProdServ12:string="Imagen no subida"

  mensajeImagenProdServAlmacen:string="Imagen no subida"
  mensajeImagenProdServAlmacen2:string="Imagen no subida"
  mensajeImagenProdServAlmacen3:string="Imagen no subida"
  mensajeImagenProdServAlmacen4:string="Imagen no subida"
  mensajeImagenProdServAlmacen5:string="Imagen no subida"
  mensajeImagenProdServAlmacen6:string="Imagen no subida"
  mensajeImagenProdServAlmacen7:string="Imagen no subida"
  mensajeImagenProdServAlmacen8:string="Imagen no subida"
  mensajeImagenProdServAlmacen9:string="Imagen no subida"
  mensajeImagenProdServAlmacen10:string="Imagen no subida"
  mensajeImagenProdServAlmacen11:string="Imagen no subida"
  mensajeImagenProdServAlmacen12:string="Imagen no subida"
  mensajeImagenProdServAlmacen13:string="Imagen no subida"
  mensajeImagenProdServAlmacen14:string="Imagen no subida"
  mensajeImagenProdServAlmacen15:string="Imagen no subida"
  mensajeImagenProdServAlmacen16:string="Imagen no subida"
  mensajeImagenProdServAlmacen17:string="Imagen no subida"
  mensajeImagenProdServAlmacen18:string="Imagen no subida"
  mensajeImagenProdServAlmacen19:string="Imagen no subida"
  mensajeImagenProdServAlmacen20:string="Imagen no subida"
  mensajeImagenProdServAlmacen21:string="Imagen no subida"
  mensajeImagenProdServAlmacen22:string="Imagen no subida"
  mensajeImagenProdServAlmacen23:string="Imagen no subida"
  mensajeImagenProdServAlmacen24:string="Imagen no subida"
  mensajeImagenProdServAlmacen25:string="Imagen no subida"
  mensajeImagenProdServAlmacen26:string="Imagen no subida"
  mensajeImagenProdServAlmacen27:string="Imagen no subida"
  mensajeImagenProdServAlmacen28:string="Imagen no subida"
  mensajeImagenProdServAlmacen29:string="Imagen no subida"
  mensajeImagenProdServAlmacen30:string="Imagen no subida"

  isLinear = false;
  primero=false;
  constructor(private _formBuilder: FormBuilder,private appService:AppService,private fb: FormBuilder,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      imagen: null
    });

    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    console.log('almacen= '+this.idUsuario[4])
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  deshabilitarprimero(){

  }

  guardarImagenCabecera(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCabecera=event.target.files;
console.log('image= '+this.imagenCabecera[0])
this.mensajeImagenCabecera=event.target.files[0].name


  }

  guardarImagenCabecera2(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCabecera2=event.target.files;
console.log('image= '+this.imagenCabecera[0])
this.mensajeImagenCabecera2=event.target.files[0].name


  }

  guardarImagenCabecera3(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCabecera3=event.target.files;
console.log('image= '+this.imagenCabecera[0])
this.mensajeImagenCabecera3=event.target.files[0].name


  }

  guardarImagenCaracteristica(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCaracteristicas=event.target.files;
console.log('image= '+this.imagenCaracteristicas[0])
this.mensajeImagenCaracteristica=event.target.files[0].name

  }

  guardarImagenCaracteristica2(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCaracteristicas2=event.target.files;
console.log('image= '+this.imagenCaracteristicas[0])
this.mensajeImagenCaracteristica2=event.target.files[0].name

  }

  guardarImagenCaracteristica3(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenCaracteristicas3=event.target.files;
console.log('image= '+this.imagenCaracteristicas[0])
this.mensajeImagenCaracteristica3=event.target.files[0].name

  }

  guardarImagenPyme(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenPyme=event.target.files;
console.log('image= '+this.imagenPyme[0])
this.mensajeImagenPyme=event.target.files[0].name

  }

  guardarImagenProdServ(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv=event.target.files;
console.log('image= '+this.imagenProdserv[0])
this.mensajeImagenProdServ=event.target.files[0].name
  }

  guardarImagenProdServ2(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv2=event.target.files;
console.log('image= '+this.imagenProdserv[0])
this.mensajeImagenProdServ2=event.target.files[0].name
  }

  guardarImagenProdServ3(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv3=event.target.files;
console.log('image= '+this.imagenProdserv[0])
this.mensajeImagenProdServ3=event.target.files[0].name
  }

  guardarImagenProdServ4(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv4=event.target.files;
console.log('image= '+this.imagenProdserv4[0])
this.mensajeImagenProdServ4=event.target.files[0].name
  }

  guardarImagenProdServ5(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv5=event.target.files;
console.log('image= '+this.imagenProdserv5[0])
this.mensajeImagenProdServ5=event.target.files[0].name
  }

  guardarImagenProdServ6(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv6=event.target.files;
console.log('image= '+this.imagenProdserv6[0])
this.mensajeImagenProdServ6=event.target.files[0].name
  }

  guardarImagenProdServ7(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv7=event.target.files;
console.log('image= '+this.imagenProdserv7[0])
this.mensajeImagenProdServ7=event.target.files[0].name
  }

  guardarImagenProdServ8(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv8=event.target.files;
console.log('image= '+this.imagenProdserv8[0])
this.mensajeImagenProdServ8=event.target.files[0].name
  }

  guardarImagenProdServ9(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv9=event.target.files;
console.log('image= '+this.imagenProdserv9[0])
this.mensajeImagenProdServ9=event.target.files[0].name
  }

  guardarImagenProdServ10(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv10=event.target.files;
console.log('image= '+this.imagenProdserv10[0])
this.mensajeImagenProdServ10=event.target.files[0].name
  }

  guardarImagenProdServ11(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv11=event.target.files;
console.log('image= '+this.imagenProdserv11[0])
this.mensajeImagenProdServ11=event.target.files[0].name
  }

  guardarImagenProdServ12(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdserv12=event.target.files;
console.log('image= '+this.imagenProdserv12[0])
this.mensajeImagenProdServ12=event.target.files[0].name
  }



//almacen metodos

  guardarImagenProdServAlmacen(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen=event.target.files;

this.mensajeImagenProdServAlmacen=event.target.files[0].name
  }

  guardarImagenProdServAlmacen2(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen2=event.target.files;

this.mensajeImagenProdServAlmacen2=event.target.files[0].name
  }

  guardarImagenProdServAlmacen3(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen3=event.target.files;

this.mensajeImagenProdServAlmacen3=event.target.files[0].name
  }

  guardarImagenProdServAlmacen4(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen4=event.target.files;

this.mensajeImagenProdServAlmacen4=event.target.files[0].name
  }

  guardarImagenProdServAlmacen5(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen5=event.target.files;

this.mensajeImagenProdServAlmacen5=event.target.files[0].name
  }

  guardarImagenProdServAlmacen6(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen6=event.target.files;

this.mensajeImagenProdServAlmacen6=event.target.files[0].name
  }

  guardarImagenProdServAlmacen7(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen7=event.target.files;

this.mensajeImagenProdServAlmacen7=event.target.files[0].name
  }

  guardarImagenProdServAlmacen8(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen8=event.target.files;

this.mensajeImagenProdServAlmacen8=event.target.files[0].name
  }

  guardarImagenProdServAlmacen9(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen9=event.target.files;

this.mensajeImagenProdServAlmacen9=event.target.files[0].name
  }

  guardarImagenProdServAlmacen10(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen10=event.target.files;

this.mensajeImagenProdServAlmacen10=event.target.files[0].name
  }

  guardarImagenProdServAlmacen11(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen11=event.target.files;

this.mensajeImagenProdServAlmacen11=event.target.files[0].name
  }

  guardarImagenProdServAlmacen12(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen12=event.target.files;

this.mensajeImagenProdServAlmacen12=event.target.files[0].name
  }

  guardarImagenProdServAlmacen13(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen13=event.target.files;

this.mensajeImagenProdServAlmacen13=event.target.files[0].name
  }

  guardarImagenProdServAlmacen14(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen14=event.target.files;

this.mensajeImagenProdServAlmacen14=event.target.files[0].name
  }

  guardarImagenProdServAlmacen15(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen15=event.target.files;

this.mensajeImagenProdServAlmacen15=event.target.files[0].name
  }

  guardarImagenProdServAlmacen16(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen16=event.target.files;

this.mensajeImagenProdServAlmacen16=event.target.files[0].name
  }

  guardarImagenProdServAlmacen17(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen17=event.target.files;

this.mensajeImagenProdServAlmacen17=event.target.files[0].name
  }

  guardarImagenProdServAlmacen18(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen18=event.target.files;

this.mensajeImagenProdServAlmacen18=event.target.files[0].name
  }

  guardarImagenProdServAlmacen19(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen19=event.target.files;

this.mensajeImagenProdServAlmacen19=event.target.files[0].name
  }

  guardarImagenProdServAlmacen20(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen20=event.target.files;

this.mensajeImagenProdServAlmacen20=event.target.files[0].name
  }

  guardarImagenProdServAlmacen21(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen21=event.target.files;

this.mensajeImagenProdServAlmacen21=event.target.files[0].name
  }

  guardarImagenProdServAlmacen22(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen22=event.target.files;

this.mensajeImagenProdServAlmacen22=event.target.files[0].name
  }

  guardarImagenProdServAlmacen23(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen23=event.target.files;

this.mensajeImagenProdServAlmacen23=event.target.files[0].name
  }

  guardarImagenProdServAlmacen24(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen24=event.target.files;

this.mensajeImagenProdServAlmacen24=event.target.files[0].name
  }

  guardarImagenProdServAlmacen25(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen25=event.target.files;

this.mensajeImagenProdServAlmacen25=event.target.files[0].name
  }

  guardarImagenProdServAlmacen26(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen26=event.target.files;

this.mensajeImagenProdServAlmacen26=event.target.files[0].name
  }

  guardarImagenProdServAlmacen27(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen27=event.target.files;

this.mensajeImagenProdServAlmacen27=event.target.files[0].name
  }

  guardarImagenProdServAlmacen28(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen28=event.target.files;

this.mensajeImagenProdServAlmacen28=event.target.files[0].name
  }

  guardarImagenProdServAlmacen29(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen29=event.target.files;

this.mensajeImagenProdServAlmacen29=event.target.files[0].name
  }

  guardarImagenProdServAlmacen30(event){
    console.log(event)
console.log('subir ' + event.target.files[0].name)
this.imagenProdservAlmacen30=event.target.files;

this.mensajeImagenProdServAlmacen30=event.target.files[0].name
  }



solicitarOnePage(){
  var x:Blob;
  let formData=new FormData();
  // for (let i = 0; i < this.imagenCabecera.length; i++) {
  //   formData.append('uploads[]',this.imagenCabecera[i],this.imagenCabecera[i].name)
  // }
  formData.append('uploads[]',this.imagenCabecera[0],this.imagenCabecera[0].name)
  formData.append('uploads2[]',this.imagenCabecera2[0],this.imagenCabecera2[0].name)
  formData.append('uploads3[]',this.imagenCabecera3[0],this.imagenCabecera3[0].name)
  formData.append('uploads4[]',this.imagenCaracteristicas[0],this.imagenCaracteristicas[0].name,)
  formData.append('uploads5[]',this.imagenCaracteristicas2[0],this.imagenCaracteristicas[0].name)
  formData.append('uploads6[]',this.imagenCaracteristicas3[0],this.imagenCaracteristicas[0].name) 
  formData.append('uploads7[]',this.imagenPyme[0],this.imagenPyme[0].name)
  formData.append('uploads8[]',this.imagenProdserv[0],this.imagenProdserv[0].name)
  formData.append('uploads9[]',this.imagenProdserv2[0],this.imagenProdserv2[0].name)
  formData.append('uploads10[]',this.imagenProdserv3[0],this.imagenProdserv3[0].name)
  formData.append('uploads11[]',this.imagenProdserv4[0],this.imagenProdserv4[0].name)
  formData.append('uploads12[]',this.imagenProdserv5[0],this.imagenProdserv5[0].name)
  formData.append('uploads13[]',this.imagenProdserv6[0],this.imagenProdserv6[0].name)
  formData.append('uploads14[]',this.imagenProdserv7[0],this.imagenProdserv7[0].name)
  formData.append('uploads15[]',this.imagenProdserv8[0],this.imagenProdserv8[0].name)
  formData.append('uploads16[]',this.imagenProdserv9[0],this.imagenProdserv9[0].name)
  formData.append('uploads17[]',this.imagenProdserv10[0],this.imagenProdserv10[0].name)
  formData.append('uploads18[]',this.imagenProdserv11[0],this.imagenProdserv11[0].name)
  formData.append('uploads19[]',this.imagenProdserv12[0],this.imagenProdserv12[0].name)
  formData.append('uploads20[]',this.infoCaracteristicas)
  formData.append('uploads21[]',this.infoCaracteristicas2)
  formData.append('uploads22[]',this.infoCaracteristicas3)
  formData.append('uploads23[]',this.infoPyme)
  formData.append('uploads24[]',this.infoProdserv)
  formData.append('uploads25[]',this.infoProdserv2) 
  formData.append('uploads26[]',this.infoProdserv3)
  formData.append('uploads27[]',this.infoProdserv4)
  formData.append('uploads28[]',this.infoProdserv5)
  formData.append('uploads29[]',this.infoProdserv6)
  formData.append('uploads30[]',this.infoProdserv7)
  formData.append('uploads31[]',this.infoProdserv8)
  formData.append('uploads32[]',this.infoProdserv9)
  formData.append('uploads33[]',this.infoProdserv10)
  formData.append('uploads34[]',this.infoProdserv11)
  formData.append('uploads35[]',this.infoProdserv12)

  // var infos=[this.infoCaracteristicas,this.infoCaracteristicas2,this.infoCaracteristicas3,this.infoPyme,this.infoProdserv,this.infoProdserv2,this.infoProdserv3]
  this.appService.subirImagenNode(formData).subscribe(res => {
    console.log(res);
    
  }, 
    err => {
      console.log(err)
    }

  )
}
sendEmailClient(){
  if(this.formContacto!=="" && this.formContacto!==undefined){
    console.log('esta bien')
    var form={
      idUsuario:this.idUsuario[0],
      nombreUsuario:this.idUsuario[1],
      idPyme:this.idUsuario[2],
      mensaje:this.formContacto
    }
    this.appService.sendEmailClient(form).subscribe(res => {
      console.log(res)

    },
      err => {
        console.log(err)
      }

    )
  }
}


onFileChange(event){
  console.log(event)
  if(event.target.files.length > 0) {
    let file = event.target.files[0];
    this.form.get('imagen').setValue(file);
  }
    
}

private prepareSave(): any {
  let input = new FormData();
  input.append('name', this.form.get('name').value);
  input.append('imagen', this.form.get('imagen').value);
  return input;
}

onSubmit() {
  const formModel = this.prepareSave();
  
  console.log('form= '+formModel.get('name').value)
  console.log('form= '+formModel.get('imagen').value)
  this.appService.solicitarOnePage(1,formModel).subscribe(res => {
    console.log(res);
    
  }, 
    err => {
      console.log(err)
    }

  )
}

// clearFile() {
//   this.imagenCabecera=[];
//   console.log(this.imagenCabecera)
// }


//primer metodo, sube las imagenes en la cabecera
subirImagenesCabecera(){
  this.subiendoimagenesCabecera=true;
  var envio=0
  console.log('imagenes cabecera')
  let formData=new FormData();
  if(this.imagenCabecera!=undefined){
    formData.append('cabecera[]',this.imagenCabecera[0],this.imagenCabecera[0].name)
    envio++;
  }
  if(this.imagenCabecera2!=undefined){
    formData.append('cabecera2[]',this.imagenCabecera2[0],this.imagenCabecera2[0].name)
    envio++;
  }
  if(this.imagenCabecera3!=undefined){
    formData.append('cabecera3[]',this.imagenCabecera3[0],this.imagenCabecera3[0].name)
    envio++;
  }
  
if(envio!=0){
  this.appService.subirImagenesCabeceraNode(this.idUsuario[2],formData).subscribe(res => {
    console.log(res);
    this.subiendoimagenesCabecera=false;
    this.imagenesCabeceraSubidas=true;
  }, 
    err => {
      console.log(err)
      this.subiendoimagenesCabecera=false;
    }

  )
}else{
  this.subiendoimagenesCabecera=false;
  console.log('no subio nada')
}

  
}

//segundo metodo, sube las imagenes de las caracteristicas y su informacion
subirImagenesCaracteristicas(){
  console.log(this.infoCaracteristicas)
  console.log(this.infoCaracteristicas2)
  console.log(this.infoCaracteristicas3)
  var envio=0
  this.subiendoimagenesCaracteristicas=true;
  console.log('imagenes caracteristicas')
  let formData=new FormData();
  if(this.imagenCaracteristicas!=undefined){
    formData.append('caracteristica[]',this.imagenCaracteristicas[0],this.imagenCaracteristicas[0].name)
    envio++;
  }
  if(this.imagenCaracteristicas2!=undefined){
    formData.append('caracteristica2[]',this.imagenCaracteristicas2[0],this.imagenCaracteristicas2[0].name)
    envio++;
  }
  if(this.imagenCaracteristicas3!=undefined){
    formData.append('caracteristica3[]',this.imagenCaracteristicas3[0],this.imagenCaracteristicas3[0].name)
    envio++;
  }
  
  if(envio!=0){
    formData.append('infoCaracteristica[]',this.infoCaracteristicas)
    formData.append('infoCaracteristica2[]',this.infoCaracteristicas2)
    formData.append('infoCaracteristica3[]',this.infoCaracteristicas3)
    this.appService.subirImagenesCaracteristicaNode(this.idUsuario[2],formData).subscribe(res => {
      console.log(res);
      this.subiendoimagenesCaracteristicas=false;
      this.imagenesCaracteristicasSubidas=true;
    }, 
      err => {
        console.log(err)
        this.subiendoimagenesCaracteristicas=false;
      }
  
    )
  }else{
    this.subiendoimagenesCaracteristicas=false;
  }
  
}

//tercer metodo, sube la imagen de la pyme y su informacion
subirImagenPyme(){
  this.subiendoimagenPyme=true;
  console.log('imagenes pyme')
  let formData=new FormData();
  var envio=0
  if(this.imagenPyme!=undefined){
    formData.append('pyme[]',this.imagenPyme[0],this.imagenPyme[0].name)
    formData.append('infoPyme[]',this.infoPyme)
    envio++;
  }
  if(envio!=0){
    this.appService.subirImagenPymeNode(this.idUsuario[2],formData).subscribe(res => {
      console.log(res);
      this.subiendoimagenPyme=false;
      this.imagenPymeSubida=true;
    }, 
      err => {
        console.log(err)
        this.subiendoimagenPyme=false;
      }
  
    )
  }else{
    this.subiendoimagenPyme=false;
    console.log('vacio')
  }
  
}

//si no es un alamcen, o sea, que solo puede subir 9 productos
//sube los 9 productos y su informacion
subir_PS_NoAlmacen(){
  this.subiendoimagenes_PS_NoAlmacen=true;
  console.log('imagenes productos servicios no almacen')
  let formData=new FormData();
  var envio=0;
  if(this.imagenProdserv!=undefined){
    formData.append('ps[]',this.imagenProdserv[0],this.imagenProdserv[0].name)
    envio++;
  }
  
  if(this.imagenProdserv2!=undefined){
    formData.append('ps2[]',this.imagenProdserv2[0],this.imagenProdserv2[0].name)
    envio++;
  }
 
if(this.imagenProdserv3!=undefined){
  formData.append('ps3[]',this.imagenProdserv3[0],this.imagenProdserv3[0].name)
  envio++;
}

if(this.imagenProdserv4!=undefined){
  formData.append('ps4[]',this.imagenProdserv4[0],this.imagenProdserv4[0].name)
  envio++;
}
 
if(this.imagenProdserv5!=undefined){
  formData.append('ps5[]',this.imagenProdserv5[0],this.imagenProdserv5[0].name)
  envio++;
}

if(this.imagenProdserv6!=undefined){
  formData.append('ps6[]',this.imagenProdserv6[0],this.imagenProdserv6[0].name)
  envio++;
}
  
if(this.imagenProdserv7!=undefined){
  formData.append('ps7[]',this.imagenProdserv7[0],this.imagenProdserv7[0].name)
  envio++;
} 
  
if(this.imagenProdserv8!=undefined){
  formData.append('ps8[]',this.imagenProdserv8[0],this.imagenProdserv8[0].name)
  envio++;
}
  
if(this.imagenProdserv9!=undefined){
  formData.append('ps9[]',this.imagenProdserv9[0],this.imagenProdserv9[0].name)
  envio++;
}

if(envio!=0){
  formData.append('infoPS[]',this.infoProdserv)
  formData.append('infoPS2[]',this.infoProdserv2)
  formData.append('infoPS3[]',this.infoProdserv3)
  formData.append('infoPS4[]',this.infoProdserv4)
  formData.append('infoPS5[]',this.infoProdserv5)
  formData.append('infoPS6[]',this.infoProdserv6)
  formData.append('infoPS7[]',this.infoProdserv7)
  formData.append('infoPS8[]',this.infoProdserv8)
  formData.append('infoPS9[]',this.infoProdserv9)
  this.appService.subirImagenesProductoServicioNode(this.idUsuario[2],formData).subscribe(res => {
    console.log(res);
    this.subiendoimagenes_PS_NoAlmacen=false;
    this.imagen_PS_NoAlmacenSubida=true;
  }, 
    err => {
      console.log(err)
      this.subiendoimagenes_PS_NoAlmacen=false;
    }

  )
}else{
  this.subiendoimagenes_PS_NoAlmacen=false;
}
  
  
}

//si es un alamcen, o sea, que puede subir 30 productos
//sube los 10 primeros productos y su informacion
subir_PS_Almacen10(){
  this.subiendoimagenes_PS_Almacen10=true;
  console.log('imagenes productos servicios almacen 10')
  let formData=new FormData();
  var envio=0;
  if(this.imagenProdservAlmacen!=undefined){
    formData.append('ps[]',this.imagenProdservAlmacen[0],this.imagenProdservAlmacen[0].name)
  }
  if(this.imagenProdservAlmacen2!=undefined){
    formData.append('ps2[]',this.imagenProdservAlmacen2[0],this.imagenProdservAlmacen2[0].name)
  }
  if(this.imagenProdservAlmacen3!=undefined){
    formData.append('ps3[]',this.imagenProdservAlmacen3[0],this.imagenProdservAlmacen3[0].name)
  }
  if(this.imagenProdservAlmacen4!=undefined){
    formData.append('ps4[]',this.imagenProdservAlmacen4[0],this.imagenProdservAlmacen4[0].name)
  }
  if(this.imagenProdservAlmacen5!=undefined){
    formData.append('ps5[]',this.imagenProdservAlmacen5[0],this.imagenProdservAlmacen5[0].name)
  }
  if(this.imagenProdservAlmacen6!=undefined){
    formData.append('ps6[]',this.imagenProdservAlmacen6[0],this.imagenProdservAlmacen6[0].name)
  }
  if(this.imagenProdservAlmacen7!=undefined){
    formData.append('ps7[]',this.imagenProdservAlmacen7[0],this.imagenProdservAlmacen7[0].name)
  }
  if(this.imagenProdservAlmacen8!=undefined){
    formData.append('ps8[]',this.imagenProdservAlmacen8[0],this.imagenProdservAlmacen8[0].name)
  }
  if(this.imagenProdservAlmacen9!=undefined){
    formData.append('ps9[]',this.imagenProdservAlmacen9[0],this.imagenProdservAlmacen9[0].name)
  }
  if(this.imagenProdservAlmacen10!=undefined){
    formData.append('ps10[]',this.imagenProdservAlmacen10[0],this.imagenProdservAlmacen10[0].name)
  }

  
  if(envio!=0){
    formData.append('infoPS[]',this.infoProdservAlmacen)
    formData.append('infoPS2[]',this.infoProdservAlmacen2)
    formData.append('infoPS3[]',this.infoProdservAlmacen3)
    formData.append('infoPS4[]',this.infoProdservAlmacen4)
    formData.append('infoPS5[]',this.infoProdservAlmacen5)
    formData.append('infoPS6[]',this.infoProdservAlmacen6)
    formData.append('infoPS7[]',this.infoProdservAlmacen7)
    formData.append('infoPS8[]',this.infoProdservAlmacen8)
    formData.append('infoPS9[]',this.infoProdservAlmacen9)
    formData.append('infoPS10[]',this.infoProdservAlmacen10)
    this.appService.subirImagenesProductoServicioAlmacen10Node(this.idUsuario[2],formData).subscribe(res => {
      console.log(res);
      this.subiendoimagenes_PS_Almacen10=false;
      this.imagen_PS_Almacen10Subida=true;
      this.prodServ0_10=false;
      this.prodServ10_20=true;
      this.prodServ20_30=false;
      this.alertaPSSubidas1_10=true;
    }, 
      err => {
        console.log(err)
        this.subiendoimagenes_PS_Almacen10=false;
      }
  
    )
  }else{
    this.subiendoimagenes_PS_Almacen10=false;
  }
  
}

//sube los 20 
subir_PS_Almacen20(){
  this.subiendoimagenes_PS_Almacen20=true;
  console.log('imagenes productos servicios almacen 20')
  let formData=new FormData();
  var envio=0;
  if(this.imagenProdservAlmacen11!=undefined){
    formData.append('ps[]',this.imagenProdservAlmacen11[0],this.imagenProdservAlmacen11[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen12!=undefined){
    formData.append('ps2[]',this.imagenProdservAlmacen12[0],this.imagenProdservAlmacen12[0].name)
    envio++;
  }

  if(this.imagenProdservAlmacen13!=undefined){
    formData.append('ps3[]',this.imagenProdservAlmacen13[0],this.imagenProdservAlmacen13[0].name)
    envio++;
  }
  if(this.imagenProdservAlmacen14!=undefined){
    formData.append('ps4[]',this.imagenProdservAlmacen14[0],this.imagenProdservAlmacen14[0].name)
    envio++;
  }

  if(this.imagenProdservAlmacen15!=undefined){
    formData.append('ps5[]',this.imagenProdservAlmacen15[0],this.imagenProdservAlmacen15[0].name)
    envio++;
  }
  if(this.imagenProdservAlmacen16!=undefined){
    formData.append('ps6[]',this.imagenProdservAlmacen16[0],this.imagenProdservAlmacen16[0].name)
    envio++;
  }
  if(this.imagenProdservAlmacen17!=undefined){
    formData.append('ps7[]',this.imagenProdservAlmacen17[0],this.imagenProdservAlmacen17[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen18!=undefined){
    formData.append('ps8[]',this.imagenProdservAlmacen18[0],this.imagenProdservAlmacen18[0].name)
    envio++;
  }

  if(this.imagenProdservAlmacen19!=undefined){
    formData.append('ps9[]',this.imagenProdservAlmacen19[0],this.imagenProdservAlmacen19[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen20!=undefined){
    formData.append('ps10[]',this.imagenProdservAlmacen20[0],this.imagenProdservAlmacen20[0].name)
    envio++;
  }
  
if(envio!=0){

  formData.append('infoPS[]',this.infoProdservAlmacen11)
  formData.append('infoPS2[]',this.infoProdservAlmacen12)
  formData.append('infoPS3[]',this.infoProdservAlmacen13)
  formData.append('infoPS4[]',this.infoProdservAlmacen14)
  formData.append('infoPS5[]',this.infoProdservAlmacen15)
  formData.append('infoPS6[]',this.infoProdservAlmacen16)
  formData.append('infoPS7[]',this.infoProdservAlmacen17)
  formData.append('infoPS8[]',this.infoProdservAlmacen18)
  formData.append('infoPS9[]',this.infoProdservAlmacen19)
  formData.append('infoPS10[]',this.infoProdservAlmacen20)
  this.appService.subirImagenesProductoServicioAlmacen20Node(this.idUsuario[2],formData).subscribe(res => {
    console.log(res);
    this.subiendoimagenes_PS_Almacen20=false;
    this.imagen_PS_Almacen20Subida=true;
    this.prodServ0_10=false;
    this.prodServ10_20=false;
    this.prodServ20_30=true;
    this.alertaPSSubidas10_20=true;
  }, 
    err => {
      console.log(err)
      this.subiendoimagenes_PS_Almacen20=false;
    }

  )
}else{
  this.subiendoimagenes_PS_Almacen20=false;
}

  
}

//sube los ultimos 10  productos y su informacion
subir_PS_Almacen30(){
  this.subiendoimagenes_PS_Almacen30=true;
  console.log('imagenes productos servicios almacen 30')
  let formData=new FormData();
  var envio=0;
  if(this.imagenProdservAlmacen21!=undefined){
    formData.append('ps[]',this.imagenProdservAlmacen21[0],this.imagenProdservAlmacen21[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen22!=undefined){
    formData.append('ps2[]',this.imagenProdservAlmacen22[0],this.imagenProdservAlmacen22[0].name)
    envio++;
  }
  if(this.imagenProdservAlmacen23!=undefined){
    formData.append('ps3[]',this.imagenProdservAlmacen23[0],this.imagenProdservAlmacen23[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen24!=undefined){
    formData.append('ps4[]',this.imagenProdservAlmacen24[0],this.imagenProdservAlmacen24[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen25!=undefined){
    formData.append('ps5[]',this.imagenProdservAlmacen25[0],this.imagenProdservAlmacen25[0].name)
    envio++;
  }

  if(this.imagenProdservAlmacen26!=undefined){
    formData.append('ps6[]',this.imagenProdservAlmacen26[0],this.imagenProdservAlmacen26[0].name)
    envio++;
  }

  if(this.imagenProdservAlmacen27!=undefined){
    formData.append('ps7[]',this.imagenProdservAlmacen27[0],this.imagenProdservAlmacen27[0].name)
    envio++;
  }
 
  if(this.imagenProdservAlmacen28!=undefined){
    formData.append('ps8[]',this.imagenProdservAlmacen28[0],this.imagenProdservAlmacen28[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen29!=undefined){
    formData.append('ps9[]',this.imagenProdservAlmacen29[0],this.imagenProdservAlmacen29[0].name)
    envio++;
  }
  
  if(this.imagenProdservAlmacen30!=undefined){
    formData.append('ps10[]',this.imagenProdservAlmacen30[0],this.imagenProdservAlmacen30[0].name)
    envio++;
  }

 if(envio!=0){
  formData.append('infoPS[]',this.infoProdservAlmacen21)
  formData.append('infoPS2[]',this.infoProdservAlmacen22)
  formData.append('infoPS3[]',this.infoProdservAlmacen23)
  formData.append('infoPS4[]',this.infoProdservAlmacen24)
  formData.append('infoPS5[]',this.infoProdservAlmacen25)
  formData.append('infoPS6[]',this.infoProdservAlmacen26)
  formData.append('infoPS7[]',this.infoProdservAlmacen27)
  formData.append('infoPS8[]',this.infoProdservAlmacen28)
  formData.append('infoPS9[]',this.infoProdservAlmacen29)
  formData.append('infoPS10[]',this.infoProdservAlmacen30)
  this.appService.subirImagenesProductoServicioAlmacen30Node(this.idUsuario[2],formData).subscribe(res => {
    console.log(res);
    this.subiendoimagenes_PS_Almacen30=false;
    this.imagen_PS_Almacen30Subida=true;
    this.prodServ0_10=false;
    this.prodServ10_20=false;
    this.prodServ20_30=false;
    this.alertaPSSubidas20_30=true;
  }, 
    err => {
      console.log(err)
      this.subiendoimagenes_PS_Almacen30=false;
    }

  )

 }else{
  this.subiendoimagenes_PS_Almacen30=false;
 }
  
}

}
