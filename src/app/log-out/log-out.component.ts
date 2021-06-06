import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService
    ) { }

  ngOnInit() {
    this.hardCodedAuthenticationService.logout();
  }

  

}
