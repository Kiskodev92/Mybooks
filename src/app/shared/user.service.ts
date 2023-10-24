import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string ="http://localhost:3000/user";
  private urlid:string ="http://localhost:3000/userid";
  public login:boolean;
  public user:User;

  constructor(private http:HttpClient) {
    this.login = false;
  
  }
  register(user:User){
    return this.http.post(this.url,user)
  }
  Login(user:User){
    return this.http.post(this.url , user);
  }
}