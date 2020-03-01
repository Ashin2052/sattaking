import { TestBed } from '@angular/core/testing';

import { ParagraphServiceService } from './paragraph-service.service';

describe('ParagraphServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParagraphServiceService = TestBed.get(ParagraphServiceService);
    expect(service).toBeTruthy();
  });
});
