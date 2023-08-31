import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder){
    this.buildForm()
  }
  public register(){
    console.log(this.myForm.value);
  }

  private buildForm(){
    let minPass= 5;
    this.myForm = this.FormBuilder.group({
      nombre: [, Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minPass)]],
    })
  }
  check(){
    if(this.myForm.valid){
      console.log(this.myForm);
    }else{}
  }
  ngOnInit():void{}
}
