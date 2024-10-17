import { TestBed } from '@angular/core/testing';

import { ActivoTareaServiceTsService } from './activo-tarea.service.ts.service';

describe('ActivoTareaServiceTsService', () => {
  let service: ActivoTareaServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivoTareaServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
