import { Component, OnInit } from '@angular/core';
import {AppService}  from '../../services/app.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Email= {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  constructor(private appservices: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  sendEmailUser(){
  console.log(this.Email)
    this.appservices.sendEmailUser(this.Email).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
  }

}
