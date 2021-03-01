import { TestBed } from '@angular/core/testing';

import { AfterLoginGuard } from './after-login.guard';

describe('AfterLoginGuard', () => {
  let guard: AfterLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
