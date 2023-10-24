import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, private userService: UsuarioService, private router: Router){
    this.buildForm()
  }
  public register(email:string,password:string){
    console.log(this.myForm.value);
    this.userService.Login(new User(0,'','',email,'',password)).subscribe((data:any)=>
    {
      console.log(data);
      if(data.error){
        console.log('error');
        console.log(data.mensaje);
      }else 
      {
        this.userService.login = true;
        this.userService.user = data.data[0]
        this.router.navigateByUrl('/book')
      };
    })
  }

  private buildForm(){
    let minPass= 5;
    this.myForm = this.FormBuilder.group({
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minPass)]],
    })
  }
  
  ngOnInit():void{}
}
