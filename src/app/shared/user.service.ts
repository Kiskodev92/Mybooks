import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserAnswer } from '../models/user-answer';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string ="http://localhost:3000/";
  public login:boolean;
  public user:User;

  constructor(private http:HttpClient) {
    this.login = false;
    this.user = null;
  }
  register(user:User){
    return this.http.post<UserAnswer>(this.url + "register", user);
  }
  Login(user:User){
    return this.http.post<User>(this.url + "Login", user);
  }
}