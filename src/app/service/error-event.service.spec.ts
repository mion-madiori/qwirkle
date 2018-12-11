import { TestBed } from '@angular/core/testing';

import { ErrorEventService } from './error-event.service';

describe('ErrorEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorEventService = TestBed.get(ErrorEventService);
    expect(service).toBeTruthy();
  });
});
