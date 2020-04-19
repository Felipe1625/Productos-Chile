import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-panel-servicios',
  templateUrl: './panel-servicios.component.html',
  styleUrls: ['./panel-servicios.component.css']
})
export class PanelServiciosComponent implements OnInit {
  data: any;
  idUsuario: any;
  list_productos: any;
  list_servicios: any;
  list_tipos_servicios: any;
  producto: any = {
    nombre: '',
    descripcion: '',
    valor: 0,
    cantidad: 0
  };
  service: any = {
    nombre: '',
    descripcion: '',
    valor: 0
  };


  nuevoProducto: any = {
    nombreProducto: '',
    descripcionProducto: '',
    valorProducto: 0,
    cantidadProducto: 0
  }

  nuevoService: any = {
    nombreServicio: '',
    descripcionServicio: '',
    valorServicio: 0
  };

  tipo: any = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    this.getProductosbyUser(this.idUsuario[0])
    this.getServiciosbyUser(this.idUsuario[0])
    this.getTiposServiciosbyRubro(this.idUsuario[0])

  }


  getProductosbyUser(id) {
    console.log('id= ' + id)
    this.appService.getProductosbyUser(id).subscribe(res => {
      console.log(res)
      this.list_productos = res

    },
      err => {
        console.log(err)
      }

    )
  }

  getServiciosbyUser(id) {
    console.log('id= ' + id)
    this.appService.getServiciosbyUser(id).subscribe(res => {
      console.log(res)
      this.list_servicios = res

    },
      err => {
        console.log(err)
      }

    )
  }

  getTiposServiciosbyRubro(id) {
    console.log('id= ' + id)
    this.appService.getTiposServiciosbyRubro(id).subscribe(res => {
      console.log(res)
      this.list_tipos_servicios = res

    },
      err => {
        console.log(err)
      }

    )
  }



  getProductoService(obj: any) {

    if (obj.idProducto == undefined) {
      console.log('es un service')
      this.service.idServicio = obj.idServicio
      this.service.nombre = obj.nombreServicio
      this.service.descripcion = obj.descripcionServicio
      this.service.valor = obj.valorServicio
    } else {
      console.log('es un producto')
      this.producto.idProducto = obj.idProducto
      this.producto.nombre = obj.nombreProducto
      this.producto.descripcion = obj.descripcionProducto
      this.producto.valor = obj.valorProducto
      this.producto.cantidad = obj.cantidadProducto

    }
  }


  deleteProductoService(producto: boolean) {
    if (producto == true) {
      console.log('es un producto')
      this.deleteProducto();

    } else {
      console.log('es un servicio')
      this.deleteService();
    }
  }

  deleteProducto() {
    this.appService.deleteProducto(this.producto.idProducto).subscribe(res => {
      console.log(res)
      this.getProductosbyUser(this.idUsuario[0])
    },
      err => {
        console.log(err)
      }

    )
  }

  deleteService() {
    this.appService.deleteService(this.service.idServicio).subscribe(res => {
      console.log(res)
      this.getServiciosbyUser(this.idUsuario[0])
    },
      err => {
        console.log(err)
      }

    )
  }

  updateProducto() {
    var data = {
      idProducto: this.producto.idProducto,
      nombreProducto: this.producto.nombre,
      descripcionProducto: this.producto.descripcion,
      valorProducto: this.producto.valor,
      cantidadProducto: this.producto.cantidad
    }

    console.log(data)
    this.appService.updateProducto(data.idProducto, data).subscribe(res => {
      console.log(res)
      this.getProductosbyUser(this.idUsuario[0])
    },
      err => {
        console.log(err)
      }

    )
  }

  updateService() {
    var data = {
      idServicio: this.service.idServicio,
      nombreServicio: this.service.nombre,
      descripcionServicio: this.service.descripcion,
      valorServicio: this.service.valor
    }

    console.log(data)

    this.appService.updateService(data.idServicio, data).subscribe(res => {
      console.log(res)
      this.getServiciosbyUser(this.idUsuario[0])
    },
      err => {
        console.log(err)
      }

    )
  }

  addProducto() {
    var data;
    for (let i = 0; i < this.list_tipos_servicios.length; i++) {
      if (this.list_tipos_servicios[i].nombreTipo == this.tipo)
        data = {
          idPyme: parseInt(this.idUsuario[2]),
          idTipos_Servicios_Productos: this.list_tipos_servicios[i].idTipos_Servicios_Productos,
          nombreProducto: this.nuevoProducto.nombreProducto,
          descripcionProducto: this.nuevoProducto.descripcionProducto,
          valorProducto: this.nuevoProducto.valorProducto,
          cantidadProducto: this.nuevoProducto.cantidadProducto
        }
    }
    console.log(data)
    this.appService.addProducto(data).subscribe(res => {
      console.log(res)
      this.nuevoProducto = {
        nombreProducto: '',
        descripcionProducto: '',
        valorProducto: 0,
        cantidadProducto: 0
      }
      this.tipo = ""
      this.getProductosbyUser(this.idUsuario[0])

    },
      err => {
        console.log(err)
      }

    )
  }

  addService() {
    var data;
    for (let i = 0; i < this.list_tipos_servicios.length; i++) {
      if (this.list_tipos_servicios[i].nombreTipo == this.tipo)
        data = {
          idPyme: parseInt(this.idUsuario[2]),
          idTipos_Servicios_Productos: this.list_tipos_servicios[i].idTipos_Servicios_Productos,
          nombreServicio: this.nuevoService.nombreServicio,
          descripcionServicio: this.nuevoService.descripcionServicio,
          valorServicio: this.nuevoService.valorServicio
        }
    }
    console.log(data)
    this.appService.addService(data).subscribe(res => {
      console.log(res)
      console.log(res)
      this.nuevoService = {
        nombreServicio: '',
        descripcionServicio: '',
        valorServicio: 0
      }
      this.tipo = ""
      this.getServiciosbyUser(this.idUsuario[0])
    },
      err => {
        console.log(err)
      }

    )
  }

}
