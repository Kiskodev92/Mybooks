import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAnswer } from 'src/app/models/user-answer';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public myRegis: FormGroup;

  constructor(private Formbuilder: FormBuilder, private userService:UsuarioService, public toastr: ToastrService, public router: Router){
    this.buildForm()
  }
  public register(){
    const user = this.myRegis.value;
    console.log(user);
    this.userService.register(user).subscribe((data: UserAnswer) =>{
      console.log(data);
      if (data.mensaje != "-1"){
        this.toastr.success("Congrats! you are registred!");
        this.router.navigate(["/loginPage"])
      } 
      else {
        this.toastr.error("Try again")
      }
    });
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
