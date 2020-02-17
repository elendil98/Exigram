import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportedComponent } from './user-reported.component';

describe('UserReportedComponent', () => {
  let component: UserReportedComponent;
  let fixture: ComponentFixture<UserReportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
