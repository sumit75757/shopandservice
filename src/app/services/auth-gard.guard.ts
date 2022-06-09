import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServicService } from './auth-servic.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  constructor(private auth:AuthServicService){}
  token:any= localStorage.getItem('token');
  header = new HttpHeaders({
    Authorization: 'Bearer '+this.token,
  });
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.token) {
        return  false
      } else {
        return true;
      }

  }
}
