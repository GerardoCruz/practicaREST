import { TestBed } from '@angular/core/testing';

import { GeneralesServiceService } from './generales-service.service';

describe('GeneralesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralesServiceService = TestBed.get(GeneralesServiceService);
    expect(service).toBeTruthy();
  });
});
