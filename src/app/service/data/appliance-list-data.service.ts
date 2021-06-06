import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_JPA_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ApplianceListService {
  // empProfileData: EmpProfiles;
  constructor(private http: HttpClient) {}

  retriveEmpDetails() {
    return this.http.get<IApplianceList[]>(
      `${API_JPA_URL}/getApplianceList/`
    );
  }

  deleteEmpDetails(serialNo) {
    // console.log("executeHelloWorldBeanService");
    return this.http.delete<IApplianceList[]>(
      `${API_JPA_URL}/deleteAppliance/${serialNo}`
    );
  }

  retrieveEmpProfile(serialNo) {
    // console.log("executeHelloWorldBeanService");
    return this.http.get<IApplianceList>(
      `${API_JPA_URL}/getEmpProfileById/${serialNo}`
    );
  }

  updateEmpProfile(serialNo, modelData) {
    // console.log("executeHelloWorldBeanService");
    return this.http.post(
      `${API_JPA_URL}/updateAppliance/${serialNo}`,
      modelData
    );
  }

  addAppProfile(serialNo, empData) {
    // console.log("executeHelloWorldBeanService");
    return this.http.post(`${API_JPA_URL}/createAppliance/${serialNo}`, empData);
  }
}

export interface IApplianceList{
  serialNo: number;
  brand: string;
  model: string;
  price: number;
  status: string;
  regDate: Date;
  message:string;
}

