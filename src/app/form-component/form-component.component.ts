import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  loginform=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('')

  })

  
  constructor() { }
  get email(){return this.loginform.get('email')}
  collectData(){
    alert("Hello ☺ " +this.loginform.value.email +"\nYour password  "+this.loginform.value.password+" ☺")

  }

  ngOnInit(): void {
  }

}
