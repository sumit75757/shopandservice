import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../../services/auth-servic.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _auth:AuthServicService,private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
  }
 signup:any;
  singupForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    character: new FormControl('User', [Validators.required])
  })
  singUp(){
    //debugger
    this._auth.singup(this.singupForm.value)
    .subscribe((res:any) =>{
     // if (res.response.respons == "succses"&& res.response.user) {
        console.log(res);
      localStorage.setItem('token', res.token)
      localStorage.setItem('userData', JSON.stringify(res.useData))

      this.route.navigate(['/'])
     /* } else {
        return false;
      }*/

    })

}
}
