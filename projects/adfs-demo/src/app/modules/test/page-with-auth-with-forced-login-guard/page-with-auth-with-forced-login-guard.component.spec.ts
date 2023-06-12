import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithAuthWithForcedLoginGuardComponent } from './page-with-auth-with-forced-login-guard.component';

describe('PageWithAuthWithForcedLoginGuardComponent', () => {
  let component: PageWithAuthWithForcedLoginGuardComponent;
  let fixture: ComponentFixture<PageWithAuthWithForcedLoginGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithAuthWithForcedLoginGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithAuthWithForcedLoginGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
