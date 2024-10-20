import { TestBed } from '@angular/core/testing';

import { PisoServiceTsService } from './piso.service.ts.service';

describe('PisoServiceTsService', () => {
  let service: PisoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PisoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
