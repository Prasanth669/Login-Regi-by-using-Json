import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public RegisterForm!: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      conformPassword: [''], 
    })
  }
  
  Reg() {
    this.http.post<any>("http://localhost:3000/signup", this.RegisterForm.value)
    .subscribe(res=>{
      alert("Register Successfully...!");
      this.RegisterForm.reset();
      this.router.navigate(['Login'])
    }, err=>{
      alert("Fill all the Details")
    })
  }
}
