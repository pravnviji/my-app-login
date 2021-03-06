import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'Admin' && password === 'psw') {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){

    let user=sessionStorage.getItem('authenticatedUser')

    return !(user === null)

    }
    
    logout(){
      sessionStorage.removeItem('authenticatedUser')
    }

}