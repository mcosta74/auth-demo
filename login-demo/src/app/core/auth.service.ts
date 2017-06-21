import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

import { ApiService } from './api.service';
import { AuthUser } from './auth-user';


@Injectable()
export class AuthService {

    private _authUser:AuthUser;

    public get authUser(): AuthUser {
        return this._authUser;
    }
    
    constructor(private api:ApiService) { }

    public login(credentials:any):Observable<any> {
        this._authUser = undefined;

        return this.api.post(
            "login/", 
            credentials
        )
        .do(res => this._authUser = new AuthUser(res));
    }
}