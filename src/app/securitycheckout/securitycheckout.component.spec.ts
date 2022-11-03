import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritycheckoutComponent } from './securitycheckout.component';

describe('SecuritycheckoutComponent', () => {
  let component: SecuritycheckoutComponent;
  let fixture: ComponentFixture<SecuritycheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritycheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritycheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
