import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../auth-servic.service';
import { FormControl,Validator,FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // info:any;

  constructor(private _auth:AuthServicService,private fb:FormBuilder) { }
  loginuser:any;
  ngOnInit() {

  }
  signinForm= this.fb.group({
    email:new FormControl('',[Validators.required]),
    password :new FormControl('',[Validators.required]),
 })
  singIn(){
    this._auth.loginin(this.singIn)
    .subscribe((res:any) =>{
      //console.log(add);
      localStorage.setItem('token', res.token)
    })
    }

}
