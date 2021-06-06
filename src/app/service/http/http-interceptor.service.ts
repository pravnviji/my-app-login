import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let userName = 'Admin'
    // let password = 'psw'

    //let basiAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password)
    let basiAuthHeaderString=this.basicAuthenticationService.getAuthenticatedToken();
    let userName=this.basicAuthenticationService.getAuthenticatedUser();

    if (basiAuthHeaderString && userName) {
      request = request.clone({
        setHeaders: {
          Authorization: basiAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
