import { TestBed } from '@angular/core/testing';

import { PlaceServiceService } from './place-service.service';

describe('PlaceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceServiceService = TestBed.get(PlaceServiceService);
    expect(service).toBeTruthy();
  });
});
