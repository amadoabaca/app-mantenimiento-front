import { TestBed } from '@angular/core/testing';

import { TareaServiceTsService } from './tarea.service.ts.service';

describe('TareaServiceTsService', () => {
  let service: TareaServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
