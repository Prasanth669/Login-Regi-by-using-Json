import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LoginForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  Log() {
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.LoginForm.value.email && a.password === this.LoginForm.value.password
      });
      if(user){
        alert("Login Successfully...!");
        this.LoginForm.reset();
        this.router.navigate(['Home'])
      }
      else {
        alert("User Not Found..");
      }
    },err=>{
      alert("Something Went Wrong")
    })
  }
}
