import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_JPA_URL } from 'src/app/app.constants';


export class HelloWorldBean{

  constructor(public message: String){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

 executeHelloWorldBeanService(){
   // console.log("executeHelloWorldBeanService");
  return this.http.get<HelloWorldBean>(`${API_JPA_URL}/helloworldBean`);
  }

  executeHelloWorldServiceWithPathVariable(name){
    // console.log("executeHelloWorldBeanService");
   return this.http.get<HelloWorldBean>(`${API_JPA_URL}/helloworldBean/${name}`);
   }

  
}
