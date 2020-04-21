import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-panel-datos-empresariales',
  templateUrl: './panel-datos-empresariales.component.html',
  styleUrls: ['./panel-datos-empresariales.component.css']
})
export class PanelDatosEmpresarialesComponent implements OnInit {

  constructor(private appService: AppService,private router:Router) { }
  data:any;
  regiones:string[]=['XV Región de Arica y Parinacota','I Región de Tarapacá','II Región de Antofagasta','III Región de Atacama','IV Región de Coquimbo','V Región de Valparaíso','Región Metropolitana','VI Región del Libertador General Bernardo O’Higgins','VII Región del Maule','XVI Región de Ñuble','VIII Región del Biobío','IX Región de La Araucanía','XIV Región de Los Ríos','X Región de Los Lagos','XI Región Aysén del General Carlos Ibáñez del Campo','XII Región de Magallanes y Antártica Chilena']
  idUsuario: any;
  response: any;
  formContacto:any=""
  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.getPyme(x[0])
  }

  getPyme(id:string) {

    this.appService.getPyme(id).subscribe(res => {
      console.log(res)
      this.data = res
    },
      err => {
        console.log(err)
      }

    )


  }

 
  updateDatosEmpresariales() {
   
    var data={
      Region:this.data.Region,
      correoContactoPyme:this.data.correoContactoPyme,
      fonoContactoUno:this.data.fonoContactoUno,
      fonoContactoDos:this.data.fonoContactoDos,
      redSocialFacebook:this.data.redSocialFacebook,
      redSocialInstagram:this.data.redSocialInstagram,
      redSocialTwitter:this.data.redSocialTwitter,
      redSocialYoutube:this.data.redSocialYoutube
    }
    console.log(data)
    console.log('id= '+this.data.idPyme)
    var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    var id=x[0]
    
    this.appService.updateDatosEmpresariales(id,data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/panel'])
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


}
