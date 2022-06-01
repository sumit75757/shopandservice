import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SinginComponent } from "./singin/singin.component";
import { SingupComponent } from "./singup/singup.component";

const routes: Routes = [
      {
        path: "/singin",
        component: SinginComponent,
      },
      { path: "/singup", component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthrouteRoutingModule {}
