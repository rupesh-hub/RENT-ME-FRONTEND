import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL:string = "http://localhost:8088/api/v1.0.0/authentication";

  constructor(private _http: HttpClient) { }

  public authenticate(data:any):Observable<any> {
    return this._http.post<any>(`${this.baseURL}/authenticate`, data);
  }

  public register(data:any):Observable<String> {
    return this._http.post<any>(`${this.baseURL}/register`, data);
  }

}
