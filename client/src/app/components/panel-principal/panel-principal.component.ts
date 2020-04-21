import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service'
@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  formContacto:any=""
  idUsuario: any;
  constructor(private appService: AppService) { }
  

  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
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
}
