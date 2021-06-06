import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateEmpProfileComponent } from './update-emp-profile/update-emp-profile.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-appliance/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'createProfile', component: CreateProfileComponent, canActivate: [RouteGuardService] },
  { path: 'logOut', component: LogOutComponent, canActivate: [RouteGuardService] },
  { path: 'updateEmpProfile/:serialNo', component: UpdateEmpProfileComponent, canActivate: [RouteGuardService] },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
