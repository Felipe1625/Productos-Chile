import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  API_URI = "https://apppc.herokuapp.com/api/app"
  // API_URI = "http://localhost:3000/api/app" 
  constructor(private http: HttpClient) { }

  sendEmailUser(form:any) { 
    console.log('form para email user: ' + form);
    return this.http.post(`${this.API_URI}/send-email-user`, form)
  }

  sendEmailClient(form){
    return this.http.post(`${this.API_URI}/send-email-client`, form)
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

  updateUsuarioPassword(idUsuario:any,data:any){
    return this.http.put(`${this.API_URI}/update-usuario-password/${idUsuario}`,data)
  }

  solicitarOnePage(id,formData){
    return this.http.post(`${this.API_URI}/solicitar-OnePage/${id}`, formData)
  }

  getProductosbyUser(id){
    return this.http.get(`${this.API_URI}/get-productos-by-user/${id}`);
  }

  getServiciosbyUser(id){
    return this.http.get(`${this.API_URI}/get-servicios-by-user/${id}`);
  }

  deleteProducto(id){
    console.log('service')
    var data={
      Habilitado:0
    }
    return this.http.put(`${this.API_URI}/delete-producto/${id}`,data)
  }

  deleteService(id){
    console.log('service')
    var data={
      Habilitado:0
    }
    return this.http.put(`${this.API_URI}/delete-service/${id}`,data)
  }

  updateProducto(id,data){
    console.log('service')
    return this.http.put(`${this.API_URI}/update-producto/${id}`,data)
  }

  updateService(id,data){
    console.log('service')
    return this.http.put(`${this.API_URI}/update-service/${id}`,data)
  }

  getTiposServiciosbyRubro(id){
    return this.http.get(`${this.API_URI}/get-tipos-servicios-by-rubro/${id}`);
  }

  addProducto(data){
    console.log('en service')
    return this.http.post(`${this.API_URI}/add-producto`, data)
  }

  addService(data){
    return this.http.post(`${this.API_URI}/add-service`, data)
  }

  getProductosServiciosPorNombre(data){
    console.log('data en service')
    console.log(data)
    return this.http.post(`${this.API_URI}/get-productos-servicios-por-nombre`,data);
  }

  getProductosServiciosPorRubro(data){
    console.log('data en service')
    console.log(data)
    return this.http.post(`${this.API_URI}/get-productos-servicios-por-rubro`,data);
  }

  getProductosServiciosPorFiltros(data){
    console.log('data en service')
    console.log(data)
    return this.http.post(`${this.API_URI}/get-productos-servicios-por-filtros`,data);
  }

  getProductoServicio(id,data){
    return this.http.post(`${this.API_URI}/get-producto-servicio/${id}`,data);
  }

  subirImagenNode(formData){
    return this.http.post(`${this.API_URI}/subir-imagen-node/`, formData)
  }




//one page
  subirImagenesCabeceraNode(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-cabecera-node/${idPyme}`, formData)
  }

  subirImagenesCaracteristicaNode(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-caracteristica-node/${idPyme}`, formData)
  }

  subirImagenPymeNode(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagen-pyme-node/${idPyme}`, formData)
  }

  subirImagenesProductoServicioNode(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-producto-servicio-node/${idPyme}`, formData)
  }

  subirImagenesProductoServicioAlmacen10Node(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-producto-servicio-almacen-10-node/${idPyme}`, formData)
  }

  subirImagenesProductoServicioAlmacen20Node(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-producto-servicio-almacen-20-node/${idPyme}`, formData)
  }

  subirImagenesProductoServicioAlmacen30Node(idPyme,formData){
    return this.http.post(`${this.API_URI}/subir-imagenes-producto-servicio-almacen-30-node/${idPyme}`, formData)
  }
//one page




  subirImagenProductoServer(formData){
    return this.http.post(`${this.API_URI}/subir-imagen-producto-server/`, formData)
  }

  subirImagenServicioServer(formData){
    return this.http.post(`${this.API_URI}/subir-imagen-servicio-server/`, formData)
  }

  
  sendEmailSolicitudProducto(formData){
    return this.http.post(`${this.API_URI}/send-email-solicitud-producto/`, formData)
  }


  sendEmailSolicitudServicio(formData){
    return this.http.post(`${this.API_URI}/send-email-solicitud-servicio/`, formData)
  }
 
  getProductoServicioFromHome(id){
    console.log('en getProductoServicioFromHome service')
    return this.http.get(`${this.API_URI}/get-producto-servicio-from-home/${id}`);
  }

  getPymesPorEntidad(nombre:string){
    console.log('en getPymesPorEntidad service')
    return this.http.get(`${this.API_URI}/get-pymes-por-entidad/${nombre}`);
  }

}
