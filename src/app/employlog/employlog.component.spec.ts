import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploylogComponent } from './employlog.component';

describe('EmploylogComponent', () => {
  let component: EmploylogComponent;
  let fixture: ComponentFixture<EmploylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploylogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
