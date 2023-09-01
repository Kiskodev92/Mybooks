import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public myRegis: FormGroup;

  constructor(private Formbuilder: FormBuilder){
    this.buildForm()
  }
  public register(){
    console.log(this.myRegis.value);
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
  regis(){
      console.log(this.myRegis.value);
  }
  ngOninit():void{}
}
