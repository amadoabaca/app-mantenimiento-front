import { TestBed } from '@angular/core/testing';

import { OperarioServiceTsService } from './operario.service.ts.service';

describe('OperarioServiceTsService', () => {
  let service: OperarioServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperarioServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
