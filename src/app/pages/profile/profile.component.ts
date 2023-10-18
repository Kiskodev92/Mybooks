import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public userData : User

  constructor( public userService:UsuarioService){
    this.userData = this.userService.user;
  }
  update(nombre:HTMLInputElement, apellido:HTMLInputElement, email:HTMLInputElement, url:HTMLInputElement){
    this.userData.name = nombre.value;
    this.userData.last_name = apellido.value;
    this.userData.email = email.value;
    this.userData.photo = url.value
  }
}
