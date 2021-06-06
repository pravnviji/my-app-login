import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isuserLoggedIn: boolean=false;
  constructor(
    public hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit() {
   //this.isuserLoggedIn= this.hardCodedAuthenticationService.isUserLoggedIn();

  // console.log('isuserLoggedIn :'+this.isuserLoggedIn);
  }

}
