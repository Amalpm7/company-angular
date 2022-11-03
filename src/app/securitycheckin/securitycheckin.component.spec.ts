import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritycheckinComponent } from './securitycheckin.component';

describe('SecuritycheckinComponent', () => {
  let component: SecuritycheckinComponent;
  let fixture: ComponentFixture<SecuritycheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritycheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritycheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
