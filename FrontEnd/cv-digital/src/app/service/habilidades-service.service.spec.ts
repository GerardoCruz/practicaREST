import { TestBed } from '@angular/core/testing';

import { HabilidadesServiceService } from './habilidades-service.service';

describe('HabilidadesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabilidadesServiceService = TestBed.get(HabilidadesServiceService);
    expect(service).toBeTruthy();
  });
});
