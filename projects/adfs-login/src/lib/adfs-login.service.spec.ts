import { TestBed } from '@angular/core/testing';

import { AdfsLoginService } from './adfs-login.service';

describe('AdfsLoginService', () => {
  let service: AdfsLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdfsLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
