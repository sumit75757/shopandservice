import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../../services/auth-servic.service';
import { FormControl,Validator,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // info:any;
  otp:boolean=false;
  btnhidde:any=true;
  userData: any;

  constructor(private auth:AuthServicService,private fb:FormBuilder,private route:Router,) { }
  loginuser:any;
  shows:boolean = false
  ngOnInit() {

  }
  signinForm= this.fb.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required]),
 })
   otpForm=this.fb.group({
     otp:new FormControl('',[Validators.required]),
 })

  singIn(){
    debugger
    this.auth.loginin(this.signinForm.value)
    .subscribe((res:any) =>{
      if (res.response.respons == "succses"&& res.response.user) {
        console.log(res);
        this.otp =true;
        this.btnhidde=false;
        this.userData = res.useData
        ////get otp api
        this.auth.otp(this.userData.email).subscribe(res=>{
          console.log(res);
        })
      localStorage.setItem('token', res.token)
      //this.signinForm.addControl(  "otp", new FormControl('',[Validators.required]) )
     // this.route.navigate(['/'])
      } else {
           return false;
      }
    })

    }

// showhide(){
// console.log(this.shows);

// this.shows = this.shows ? false :true

// // if (this.shows) {
// //   this.shows =fasle
// // } else {
// //   this.shows =true

// // }
// }



sendOtp(){
  this.auth.veryfyotp(this.userData.email).subscribe(res=>{
    console.log(res);

  })

}
}
