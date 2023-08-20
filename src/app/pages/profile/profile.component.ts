import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user : User

  constructor(){
    this.user = new User(42,'Claudia', 'Garcia Llorente', 'prueba@hotmail.com', 'https://this-person-does-not-exist.com/img/avatar-gen111553d4e9315edb8c493a6d766f16c1.jpg', 'mamona')
  }
  update(nombre:HTMLInputElement, apellido:HTMLInputElement, email:HTMLInputElement, url:HTMLInputElement){
    this.user.name = nombre.value;
    this.user.last_name = apellido.value;
    this.user.email = email.value;
    this.user.photo = url.value
  }
}
