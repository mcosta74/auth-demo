import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthUser } from './auth-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  private _errorMessage:string;

  public get errorMessage():string {
    return this._errorMessage;
  }
  constructor(private auth:AuthService, private fb:FormBuilder) { 
    this._errorMessage = "";

    this.loginForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ''
      }
    );
  }

  public get authUser():AuthUser {
    return this.auth.authUser;
  } 
  
  ngOnInit() {
  }

  login() {
    this._errorMessage = "";
    const credentials:any = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value      
    }
    this.auth.login(credentials)
      .subscribe(
        res => {},
        err => this._errorMessage = err.json().detail
      );
  }

}
