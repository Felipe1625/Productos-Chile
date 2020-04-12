import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
