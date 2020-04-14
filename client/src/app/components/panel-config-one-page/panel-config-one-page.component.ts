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
  constructor(private _formBuilder: FormBuilder,private appService:AppService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  guardarImagenCabecera(e:any){
console.log('subir ' + e.target.files[0].name)
this.imagenCabecera=e.target.files[0];


  }
solicitarOnePage(){
  let formData=new FormData();
  for (let i = 0; i < this.imagenCabecera.length; i++) {
    formData.append("uploads[]",this.imagenCabecera[i],this.imagenCabecera[i].name)
  }
  console.log('imagen= '+formData);
  this.appService.solicitarOnePage(1,formData).subscribe(res => {
    console.log(res);
    
  }, 
    err => {
      console.log(err)
    }

  )
}


}
