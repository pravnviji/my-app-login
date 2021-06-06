import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }



  excecuteJWTAuthenticationService(username, password) {

    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem(AUTHENTICATED_USER)

    return !(user === null)

  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  excecuteAuthenticationService(userName, password) {

    let basiAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password)

    let headers = new HttpHeaders({
      Authorization: basiAuthHeaderString
    }
    )

    // console.log("executeHelloWorldBeanService");
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, userName)
          sessionStorage.setItem(TOKEN, basiAuthHeaderString)
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }


}

export class AuthenticationBean {

  constructor(public message: String) {

  }

}