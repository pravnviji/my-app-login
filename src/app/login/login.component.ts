import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //username = 'Admin';
  username = 'Admin';
  password = '12345';
  errMsg = 'Invalid Username';
  isInvalidLogin = false;


  constructor(private router: Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
    ) { }

  ngOnInit() {
  }
  handleLogin() {
    console.log(this.username);

    //  if (this.username === 'Admin' && this.password === 'psw') {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {

      this.router.navigate(['home-appliance', this.username]);
      this.isInvalidLogin = false;
    } else {
      this.isInvalidLogin = true;
    }
   
  }

  handleBasicAuthLogin() {
    console.log(this.username);

    //  if (this.username === 'Admin' && this.password === 'psw') {
    this.basicAuthenticationService.excecuteAuthenticationService(this.username, this.password)
        .subscribe(
          data => {console.log(data)
          this.router.navigate(['home-appliance', this.username]);
          this.isInvalidLogin = false;
          },
          error => {
            console.log(error)
            this.isInvalidLogin = true;
          }
    ) 
  }


  handleJWTAuthLogin() {
    console.log(this.username);
    console.log(this.password);

    //  if (this.username === 'Admin' && this.password === 'psw') {
    this.basicAuthenticationService.excecuteJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {console.log(data)
          this.router.navigate(['home-appliance', this.username]);
          this.isInvalidLogin = false;
          },
          error => {
            console.log(error)
            this.isInvalidLogin = true;
          }
    ) 
  }



  handleRegister() { }

  handleResetPasword() { }

}
