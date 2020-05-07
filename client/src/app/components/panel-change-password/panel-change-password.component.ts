import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service'
@Component({
  selector: 'app-panel-change-password',
  templateUrl: './panel-change-password.component.html',
  styleUrls: ['./panel-change-password.component.css']
})
export class PanelChangePasswordComponent implements OnInit {
  data = {
    password: '',
    newPassword: '',
    repeatPassword: ''
  }
  idUsuario: any;
  mensajeErrorPassword: string = ""
  passwordUpdated=false;
  btnIngresar=false;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
  }

  updatePassword() {
    this.btnIngresar=true
    if (!(this.data.password == '' || this.data.newPassword == '' || this.data.repeatPassword == '')) {
      if(this.data.newPassword == this.data.repeatPassword){
        this.appService.updateUsuarioPassword(this.idUsuario[0],this.data).subscribe(res => {
          console.log(res);
          this.mensajeErrorPassword=''
          this.passwordUpdated=true;
         
          this.data.password=''
          this.data.newPassword=''
          this.data.repeatPassword=''
        },
          err => {
            console.log(err)
            this.mensajeErrorPassword='Error en contraseña'
            this.data.password=''
          }
    
        )
      }else{

        this.mensajeErrorPassword='Las contraseñas no coinciden'
        this.data.newPassword=''
        this.data.repeatPassword=''
      }
    }else{
      this.mensajeErrorPassword='Ingrese todos los campos'
    }
    this.btnIngresar=false;
  }

}
