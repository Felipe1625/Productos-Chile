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

  constructor(private _formBuilder: FormBuilder,private appService:AppService,private fb: FormBuilder,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      imagen: null
    });

    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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

}
