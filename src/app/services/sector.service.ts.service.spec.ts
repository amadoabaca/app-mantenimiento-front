import { TestBed } from '@angular/core/testing';

import { SectorServiceTsService } from './sector.service.ts.service';

describe('SectorServiceTsService', () => {
  let service: SectorServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
