import { TestBed } from '@angular/core/testing';

import { UbicacionServiceTsService } from './ubicacion.service.ts.service';

describe('UbicacionServiceTsService', () => {
  let service: UbicacionServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
