import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpProfileComponent } from './update-emp-profile.component';

describe('UpdateEmpProfileComponent', () => {
  let component: UpdateEmpProfileComponent;
  let fixture: ComponentFixture<UpdateEmpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
