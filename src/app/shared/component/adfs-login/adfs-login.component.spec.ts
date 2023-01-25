import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfsLoginComponent } from './adfs-login.component';

describe('AdfsLoginComponent', () => {
  let component: AdfsLoginComponent;
  let fixture: ComponentFixture<AdfsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdfsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdfsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
