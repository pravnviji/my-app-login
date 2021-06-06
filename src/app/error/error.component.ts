import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMsg = 'Error occured, please contact admin' ;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
