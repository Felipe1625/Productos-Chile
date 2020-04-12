import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

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
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('login= '+this.mostrarLogin)
    if((!!localStorage.getItem('token'))){
      this.router.navigate(['/home'])
    }
  }

  signin() {
    //la api me retorna el id del usuario, el nombre, y el token,
    //guardamos el token en el localstorage con el nombre token, y el id y nombre de usuario lo unimos en un solo string separado por la nomneclatura (*/as), luego ese string lo encriptamos y lo guardamos en el local storage con el nombre de res
      this.authService.signin(this.user).subscribe(res => {
      this.response = res
      localStorage.setItem('res', btoa(res['Admin'].idUsuario + '(*/as)' + res['Admin'].NombreUsuario))
      localStorage.setItem('token', res['token'])
      this.router.navigate(['/panel'])
    },
      err => {
        console.log(err)
        this.user.email = ""
        this.user.password = ""
      }

    )


  }
}
