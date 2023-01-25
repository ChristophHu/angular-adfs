import { TestBed } from '@angular/core/testing';

import { AuthWithForcedLoginGuard } from './auth-with-forced-login.guard';

describe('AuthWithForcedLoginGuard', () => {
  let guard: AuthWithForcedLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthWithForcedLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
