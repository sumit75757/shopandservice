import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../auth-servic.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _auth:AuthServicService,private fb:FormBuilder) { }

  ngOnInit() {
  }
 signup:any;
  singupForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  singUp(){
    this._auth.singup(this.singUp)
    .subscribe((res:any) =>{
      //console.log(add);
      localStorage.setItem('token', res.token)
    })

}
}
