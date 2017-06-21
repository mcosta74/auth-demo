import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, CookieXSRFStrategy, XSRFStrategy } from '@angular/http';

import { SuiModule } from "ng2-semantic-ui";

import { LoginComponent } from './login.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';


export function CookieXSRFStrategyFactory() {
  return new CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SuiModule
  ],
  declarations: [LoginComponent],
  exports: [
    CommonModule,
    FormsModule,
    LoginComponent,
    SuiModule
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: XSRFStrategy, useFactory: CookieXSRFStrategyFactory }
  ]
})
export class CoreModule { }
