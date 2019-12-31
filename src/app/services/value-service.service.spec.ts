import { TestBed } from '@angular/core/testing';

import { ValueServiceService } from './value-service.service';

describe('ValueServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueServiceService = TestBed.get(ValueServiceService);
    expect(service).toBeTruthy();
  });
});
