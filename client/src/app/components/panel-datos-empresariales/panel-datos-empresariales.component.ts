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


  response: any;

  ngOnInit(): void {
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
      nombrePyme:this.data[0].nombrePyme,
      giroPyme:this.data[0].giroPyme,
      correoContactoPyme:this.data[0].correoContactoPyme,
      fonoContactoUno:this.data[0].fonoContactoUno,
      fonoContactoDos:this.data[0].fonoContactoDos
    }
    this.appService.updateDatosEmpresariales(this.data[0].idPyme,data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/panel'])
    },
      err => {
        console.log(err)
      }

    )
  }

}
