import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    
    public readonly baseUrl:string = 'http://localhost:8000/api';
    
    constructor(private http: Http) { }
    
    public get(path:string): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/${path}`
        )
        .catch(err => Observable.throw(err))
        .map((response:Response) => response.json());
    }

    public post(path:string, data:any): Observable<any> {
        return this.http.post(
            `${this.baseUrl}/${path}`,
            data
        )
        .catch(err => Observable.throw(err))
        .map((response:Response) => response.json());
    }
}