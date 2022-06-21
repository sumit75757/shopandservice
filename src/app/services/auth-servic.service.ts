import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServicService {
  token:any= localStorage.getItem('token');
  // baseurl:any='https://nodejssssss.herokuapp.com/';
  baseurl:any='http://localhost:4000/';

  constructor(private http:HttpClient) { }
  header = new HttpHeaders({
    Authorization: 'Bearer '+this.token,
  });
  loginin( data:any){
    return  this.http.post(this.baseurl +'api/auth/singin',data);
  }
  singup(data: any) {
    return this.http.post(this.baseurl + 'api/auth/singup',data);
  }
  otp(data){
    return this.http.post(this.baseurl + 'api/auth/varification/', data ,{ headers: this.header});
  }
  veryfyotp(data) {
    return this.http.post(this.baseurl + 'api/auth/varification/otp', data, { headers: this.header });

  }
}
