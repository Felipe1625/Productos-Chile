import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = "https://apppc.herokuapp.com/api/app"
  // API_URI = "http://localhost:3000/api/app" 
  constructor(private http:HttpClient,private router:Router) { }

  signin(user){
    return this.http.post(`${this.API_URI}/signin`,user)
  }

  //para eliminar el token del localStorage
  loggedOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('res')
    if(!(this.loggedIn())){
      this.router.navigate([''])
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
