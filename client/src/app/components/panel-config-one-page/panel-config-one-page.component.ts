import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AppService} from '../../services/app.service'

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
  formContacto:any=""
  idUsuario: any;




  form: FormGroup;
 




  constructor(private _formBuilder: FormBuilder,private appService:AppService,private fb: FormBuilder) { }

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

  }

solicitarOnePage(){
  let formData=new FormData();
  for (let i = 0; i < this.imagenCabecera.length; i++) {
    formData.append('uploads[]',this.imagenCabecera[i],this.imagenCabecera[i].name)
  }

  formData.append("fileToUpload", this.imagenCabecera[0]);
  console.log('formdata= '+formData.get('fileToUpload'))
  
  this.appService.solicitarOnePage(1,formData).subscribe(res => {
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

clearFile() {
  this.form.get('imagen').setValue(null);
  
}

}
