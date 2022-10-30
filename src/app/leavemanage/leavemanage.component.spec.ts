import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanageComponent } from './leavemanage.component';

describe('LeavemanageComponent', () => {
  let component: LeavemanageComponent;
  let fixture: ComponentFixture<LeavemanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavemanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
