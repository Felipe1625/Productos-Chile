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
formContacto:any=""
  tipo: any = '';
 
imagenProducto:Array<File>;
imagenServicio:Array<File>;
agregar:any;
mensajeImagenProd:string='Imagen no subida'
mensajeImagenServ:string='Imagen no subida'
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    this.getProductosbyUser(this.idUsuario[0])
    this.getTiposServiciosbyRubro(this.idUsuario[0])

  }


verificarCantProdServ(){
  console.log('cant prods= '+this.list_productos.length)
  console.log('cant serv= '+this.list_servicios.length)
  var pro=Number(this.list_productos.length)
  var serv=Number(this.list_servicios.length)
  console.log('cant total= '+(Number(this.list_productos.length) + Number(this.list_servicios.length)))
  if((Number(this.list_productos.length) + Number(this.list_servicios.length))>=5){
    console.log('mas de 5 productos o igual a 5')
    this.agregar=false
  }else{
    console.log('menos de 5 productos')
    this.agregar=true
  }
}


  getProductosbyUser(id) {
    console.log('id= ' + id)
    this.appService.getProductosbyUser(id).subscribe(res => {
      console.log(res)
      this.list_productos = res
      this.getServiciosbyUser(id)
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
      this.verificarCantProdServ()
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

  guardarImagenProducto(event){
    console.log('guardarImagenProducto')
    console.log(event)
    console.log('subir ' + event.target.files[0].name)
    this.imagenProducto=event.target.files;
    console.log('image= '+this.imagenProducto[0])
    this.mensajeImagenProd=event.target.files[0].name
  }
 
  guardarImagenServicio(event){
    console.log('guardarImagenServicio')
    console.log(event)
    console.log('subir ' + event.target.files[0].name)
    this.imagenServicio=event.target.files;
    console.log('image= '+this.imagenServicio[0])
    console.log(this.mensajeImagenServ)
    this.mensajeImagenServ=event.target.files[0].name
    console.log(this.mensajeImagenServ)
  }


  subirImagenProductoServer(){
    let formData=new FormData();
   
    formData.append('uploads[]',this.imagenProducto[0],this.imagenProducto[0].name)
    console.log(this.imagenProducto[0].name)
    this.appService.subirImagenProductoServer(formData).subscribe(res => {
      console.log(res);
      
    }, 
      err => {
        console.log(err)
      }
  
    )
  }

  subirImagenServicioServer(){
    let formData=new FormData();
  
  formData.append('uploads[]',this.imagenServicio[0],this.imagenServicio[0].name)

  this.appService.subirImagenServicioServer(formData).subscribe(res => {
    console.log(res);
    
  }, 
    err => {
      console.log(err)
    }

  )

  }

sendEmailSolicitudProducto(){
  let formData=new FormData();
  
  
    formData.append('uploads1[]',this.nuevoProducto.nombreProducto)
    formData.append('uploads2[]',this.nuevoProducto.descripcionProducto)
    formData.append('uploads3[]',this.nuevoProducto.valorProducto)
    formData.append('uploads4[]',this.nuevoProducto.cantidadProducto)
    formData.append('uploads5[]',this.tipo)
    formData.append('uploads6[]',this.imagenProducto[0],this.imagenProducto[0].name)
    formData.append('uploads7[]',this.idUsuario[2])

    this.appService.sendEmailSolicitudProducto(formData).subscribe(res => {
      console.log(res)
      
    },
      err => {
        console.log(err)
      }

    )

  
}

sendEmailSolicitudServicio(){
  let formData=new FormData();
  
  
    formData.append('uploads1[]',this.nuevoService.nombreServicio)
    formData.append('uploads2[]',this.nuevoService.descripcionServicio)
    formData.append('uploads3[]',this.nuevoService.valorServicio)
    formData.append('uploads4[]',this.tipo)
    formData.append('uploads5[]',this.imagenServicio[0],this.imagenServicio[0].name)
    formData.append('uploads6[]',this.idUsuario[2])

    this.appService.sendEmailSolicitudServicio(formData).subscribe(res => {
      console.log(res)
      
    },
      err => {
        console.log(err)
      }

    )

  
}

}
