import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserAnswer } from 'src/app/models/user-answer';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public myRegis: FormGroup;

  constructor(private Formbuilder: FormBuilder, private userService:UsuarioService, private router: Router){
    this.buildForm()
  }
  public register(id_user:number ,name:string ,last_name:string ,email:string ,photo:string, password:string){
   console.log( this.myRegis.value);

    this.userService.register(new User(0,name, last_name, email,photo,password)).subscribe((data:any) =>{
      console.log(data);
     
  })
  this.router.navigateByUrl('/login')
}

  private buildForm(){
    let minPass = 6;
    this.myRegis = this.Formbuilder.group({
      name: [, Validators.required],
      apellidos: [, Validators.required],
      email: [,[Validators.required, Validators.email]],
      url: [, Validators.required],
      password: [,[Validators.required, Validators.minLength(minPass)]],
      reppass: [,[Validators.required, Validators.minLength(minPass)]],
    })
  } 
  private checkPasswords(control: AbstractControl){
    let result = {matchPassword: true};
    if (control.parent?.value.password == control.value)
      result = null;
    return result;
  }

  regis(){
      console.log(this.myRegis.value);
  }
  ngOninit():void{}
}
