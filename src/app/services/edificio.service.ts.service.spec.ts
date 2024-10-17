import { TestBed } from '@angular/core/testing';

import { EdificioServiceTsService } from './edificio.service.ts.service';

describe('EdificioServiceTsService', () => {
  let service: EdificioServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificioServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
