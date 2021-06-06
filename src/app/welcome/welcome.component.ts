import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ApplianceListService,IApplianceList } from '../service/data/appliance-list-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  message: String;
  empDetails: IApplianceList[];

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService,
    private applianceListService: ApplianceListService,
    private router: Router

  ) { this.refreshEmpProfiles(); }

  ngOnInit() {

    // console.log(this.route.snapshot.params[('name')]);
    this.name = this.route.snapshot.params[('name')];

  }

  refreshEmpProfiles() {
    this.applianceListService.retriveEmpDetails().subscribe(
      response => {
        console.log("Retrieving list of refreshEmpProfiles");
        console.log(response);
        this.empDetails = response;
      }
    )
  }

  getWelcomeMsg() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMsgWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)

    );
  }

  handleSuccessResponse(response) {
    console.log(response.message)
    this.message = response.message;
  }
  handleErrorResponse(error) {
    console.log(error.message)
    this.message = error.error.message;
  }

  deleteEmpProfile(serialNo) {
    console.log('delete emp' + serialNo);

    this.applianceListService.deleteEmpDetails(serialNo).subscribe(
      response => {
        this.empDetails = response;
        this.message = `Delete was successful for Appliance Serial No - ${serialNo}`;
        this.refreshEmpProfiles();
      }
    )
  }

  updateEmpProfile(serialNo) {

    console.log('Serial No' + serialNo)

    this.router.navigate(['updateEmpProfile',serialNo]);
  }

  addEmpProfile(){

  this.router.navigate(["createProfile"]);
  }
  
}
