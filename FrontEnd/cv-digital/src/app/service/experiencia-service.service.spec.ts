import { TestBed } from '@angular/core/testing';

import { ExperienciaServiceService } from './experiencia-service.service';

describe('ExperienciaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienciaServiceService = TestBed.get(ExperienciaServiceService);
    expect(service).toBeTruthy();
  });
});
