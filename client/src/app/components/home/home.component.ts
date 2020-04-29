import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import {AppService}  from '../../services/app.service'
import {AuthService} from '../../services/auth.service'
import { Router, RouterLink } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('div')
  div: ElementRef;
  @ViewChild('span')
  span: ElementRef;
  @ViewChild('p')
  p: ElementRef;

  usuario:string="";
  Email= {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  buscar:string=""
  formEmail:boolean=true
  btnContacto:boolean=false;
  constructor(private appService: AppService, private router: Router,public authService:AuthService,private appComponent:AppComponent) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.usuario=x[1]
    console.log(this.buscar)
    
    }
  }

 

  goNosotros(): void {
    console.log('go to')
    this.div.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  goCaracteristicas(): void {
    console.log('go to')
    this.span.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
  
  goContacto(): void {
    console.log('go to')
    this.p.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  sendEmailUser(){
    this.btnContacto=true;
  console.log(this.Email)
  
    this.appService.sendEmailUser(this.Email).subscribe(
      res => {
        console.log(res)
        this.formEmail=false;
      },
      err => console.error(err)
    );
  }

  buscarProductosServiciosPorNombre(){
    console.log(this.buscar)
    this.appComponent.busqueda=this.buscar.toLocaleLowerCase()
    console.log(this.buscar.toLocaleLowerCase())
    this.router.navigate(['/busqueda-servicio-producto'])
  }

  buscarProductosServiciosPorRubro(num){
    console.log(this.buscar)
    this.appComponent.rubroUltimoProductoServicio=num
    this.appComponent.prodServ=''
    this.router.navigate(['/detalle-item'])
  }

}
