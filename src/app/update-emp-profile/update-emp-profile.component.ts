import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApplianceListService,IApplianceList } from '../service/data/appliance-list-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp-profile',
  templateUrl: './update-emp-profile.component.html',
  styleUrls: ['./update-emp-profile.component.css']
})
export class UpdateEmpProfileComponent implements OnInit, OnDestroy {

  serialNo: any;
  empData: IApplianceList;
  private sub: any;
;
  constructor(
    private empDataService: ApplianceListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.serialNo = params['serialNo']; 
   });
    console.log(""+this.serialNo);
    this.empDataService.retrieveEmpProfile(this.serialNo).subscribe(
      empData => {
        console.log(empData);
        this.empData = empData;
      }
    );
    console.log(this.empData);
  }

  updateEmpProfile() {

    this.empDataService.updateEmpProfile(this.serialNo, this.empData).subscribe(
      data => console.log(data)
    );
    this.router.navigate(['/home-appliance/Admin']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
