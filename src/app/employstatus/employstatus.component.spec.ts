import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploystatusComponent } from './employstatus.component';

describe('EmploystatusComponent', () => {
  let component: EmploystatusComponent;
  let fixture: ComponentFixture<EmploystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploystatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
