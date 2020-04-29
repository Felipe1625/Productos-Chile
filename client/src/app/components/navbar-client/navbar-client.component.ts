import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

  constructor(public authService:AuthService) { }
  idUsuario:any;
  ngOnInit(): void {
    var res = atob(localStorage.getItem('res'))
    this.idUsuario = res.split("(*/as)");
    console.log('one page= '+this.idUsuario[3])
    if(this.idUsuario[3]=='null'){
      console.log('es null')
      this.idUsuario[3]==''
    }
  }

}
