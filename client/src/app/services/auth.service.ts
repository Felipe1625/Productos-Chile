import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI="http://localhost:3000/api" //ruta api en server
  constructor(private http:HttpClient,private router:Router) { }

  signin(user){
    return this.http.post(`${this.API_URI}/app/signin`,user)
  }

  //para eliminar el token del localStorage
  loggedOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('res')
    if(!(this.loggedIn())){
      this.router.navigate(['/home'])
    }
   
  }

  //verificar si esta loguado o no
  loggedIn(){
    return !!localStorage.getItem('token') //esto verifica si tiene el token el localStorage, si lo tiene return true, else false
    }

  verificarLoginPanel(){
    if(!!localStorage.getItem('token')){
      this.router.navigate(['/panel'])
    }else{
      this.router.navigate(['/login'])
    }
  }


}
