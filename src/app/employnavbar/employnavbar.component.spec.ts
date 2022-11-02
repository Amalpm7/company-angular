import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploynavbarComponent } from './employnavbar.component';

describe('EmploynavbarComponent', () => {
  let component: EmploynavbarComponent;
  let fixture: ComponentFixture<EmploynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploynavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
