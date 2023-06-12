import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithAuthGuardComponent } from './page-with-auth-guard.component';

describe('PageWithAuthGuardComponent', () => {
  let component: PageWithAuthGuardComponent;
  let fixture: ComponentFixture<PageWithAuthGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithAuthGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithAuthGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
