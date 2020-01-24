import { TestBed } from '@angular/core/testing';

import { ServiceUtilService } from './service-util.service';

describe('ServiceUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceUtilService = TestBed.get(ServiceUtilService);
    expect(service).toBeTruthy();
  });
});
