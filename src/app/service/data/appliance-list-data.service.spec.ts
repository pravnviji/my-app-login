import { TestBed } from '@angular/core/testing';

import { EmpDataService } from './appliance-list-data.service';

describe('EmpDataService', () => {
  let service: EmpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
