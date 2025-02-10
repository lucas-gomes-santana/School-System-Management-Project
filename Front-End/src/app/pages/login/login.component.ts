import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  teacherName: string = "";
  teacherPassword:string = "";

  constructor(private http: HttpClient, private router: Router){

    login(){
      this.http.post<any>('http://localhost:8080/api/teachers/login', {
        name: this.teacherName,
        password: this.teacherPassword

      }).subscribe(response => {
        if(response){
          this.router.navigate(['/dashboard'], { state: {teacher:response}} );
        }
        else{
          alert("Invalid credentials!");
        }
      });
    }
  }
}
