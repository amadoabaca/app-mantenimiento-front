import { TestBed } from '@angular/core/testing';

import { ActivoServiceTsService } from './activo.service.ts.service';

describe('ActivoServiceTsService', () => {
  let service: ActivoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
