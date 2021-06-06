import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ApplianceListService,
  IApplianceList,
} from '../service/data/appliance-list-data.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  apName: String;
  profileFormGroup: FormGroup;
  applianceListData: IApplianceList;
  constructor(
    private applianceListService: ApplianceListService,
    private router: Router
  ) {}
  ngOnInit() {
    this.profileFormGroup = new FormGroup({
          'serialNo':new FormControl(null,Validators.required),
          'brand':new FormControl(null,Validators.required),
          'model':new FormControl(null,Validators.required),
          'price':new FormControl(null,Validators.required),
          'status':new FormControl(null,Validators.required),
          'regDate':new FormControl(null,Validators.required),
      });
  }

  addProfile() {
    console.log(this.profileFormGroup.getRawValue['serialNo']);
    console.log(this.profileFormGroup.value);
      this.applianceListService
        .addAppProfile(this.profileFormGroup.getRawValue['serialNo'], this.profileFormGroup.value)
        .subscribe((data) => console.log(data));
      this.router.navigate(['/home-appliance/in28minutes']);
    }
}
