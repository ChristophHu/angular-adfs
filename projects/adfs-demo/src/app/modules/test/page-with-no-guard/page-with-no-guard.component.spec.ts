import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithNoGuardComponent } from './page-with-no-guard.component';

describe('PageWithNoGuardComponent', () => {
  let component: PageWithNoGuardComponent;
  let fixture: ComponentFixture<PageWithNoGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithNoGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithNoGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
