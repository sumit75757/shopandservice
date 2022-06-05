import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../auth-servic.service';
import { FormControl,Validator,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // info:any;

  constructor(private auth:AuthServicService,private fb:FormBuilder,private route:Router) { }
  loginuser:any;
  shows:boolean = false
  ngOnInit() {

  }
  signinForm= this.fb.group({
    email:new FormControl('',[Validators.required]),
    password :new FormControl('',[Validators.required]),
 })
 singupForm = this.fb.group({
  username: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
})
  singIn(){
    debugger
    this.auth.loginin(this.signinForm.value)
    .subscribe((res:any) =>{
      if (res.response.respons == "succses"&& res.response.user) {
        console.log(res);
      localStorage.setItem('token', res.token)
      this.route.navigate(['/'])
      } else {

      }
    })
    }
showhide(){
console.log(this.shows);

this.shows = this.shows ? false :true

// if (this.shows) {
//   this.shows =fasle
// } else {
//   this.shows =true

// }
}
}
