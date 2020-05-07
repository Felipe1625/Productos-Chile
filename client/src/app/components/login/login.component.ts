import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import {AppComponent} from '../../app.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  response: any;
  mostrarLogin:boolean;
  btnIngresar:boolean=false;
  mensajeError:boolean=false;
  constructor(private authService: AuthService, private router: Router,private appComponent:AppComponent) { }

  ngOnInit(): void {
    console.log('login= '+this.mostrarLogin)
    if((!!localStorage.getItem('token'))){
      this.router.navigate(['/home'])
    }
  }

  signin() {
    //la api me retorna el id del usuario, el nombre, y el token,
    //guardamos el token en el localstorage con el nombre token, y el id y nombre de usuario lo unimos en un solo string separado por la nomneclatura (*/as), luego ese string lo encriptamos y lo guardamos en el local storage con el nombre de res
      this.btnIngresar=true
      this.mensajeError=false;
      this.authService.signin(this.user).subscribe(res => {
      this.response = res
      console.log(res)
      console.log(res['Admin'].idUsuario)
      console.log(res['Admin'].almacen)
      this.appComponent.usuario=res['Admin'].NombreUsuario
      localStorage.setItem('res', btoa(res['Admin'].idUsuario + '(*/as)' + res['Admin'].NombreUsuario+ '(*/as)' +res['Admin'].Pyme_idPyme+ '(*/as)' +res['Admin'].link_OnePage+ '(*/as)' +res['Admin'].almacen))
      localStorage.setItem('token', res['token'])
      this.router.navigate(['/panel'])
    },
      err => {
        console.log(err)
        this.btnIngresar=false
        this.mensajeError=true
        this.user.email = ""
        this.user.password = ""
      }

    )


  }
}
