import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { AuthrouteRoutingModule  } from "./authroute-routing.module";
@NgModule({
  declarations: [SingupComponent,SinginComponent],
  imports: [
    CommonModule,
    AuthrouteRoutingModule

  ]
})
export class AuthModule { }
