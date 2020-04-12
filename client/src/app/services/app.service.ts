import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_URI = "http://localhost:3000/api/app" //ruta api en server
  constructor(private http: HttpClient) { }

  sendEmailUser(form:any) {
    console.log('form para email user: ' + form);
    return this.http.post(`${this.API_URI}/send-email-user`, form)
  }

  getPyme(idPyme:string) {
    return this.http.get(`${this.API_URI}/get-pyme/${idPyme}`);
  }
  
  getUsuario(idUser:string){
    return this.http.get(`${this.API_URI}/get-usuario/${idUser}`);
  }

  updateDatosEmpresariales(idpyme:any,data:any){
    return this.http.put(`${this.API_URI}/update-datos-empresariales/${idpyme}`,data)
  }

  updateDatosUsuario(idUsuario:any,data:any){
    return this.http.put(`${this.API_URI}/update-datos-usuario/${idUsuario}`,data)
  }

}
