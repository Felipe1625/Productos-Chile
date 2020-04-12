import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:string="";
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      var res=atob(localStorage.getItem('res'))
    var x=res.split("(*/as)");
    this.usuario=x[1]
    }
  }

}
