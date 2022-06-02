import { TestBed } from '@angular/core/testing';

import { AuthServicService } from './auth-servic.service';

describe('AuthServicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServicService = TestBed.get(AuthServicService);
    expect(service).toBeTruthy();
  });
});
