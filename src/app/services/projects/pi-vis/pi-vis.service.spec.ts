import { TestBed } from '@angular/core/testing';

import { PiVisService } from './pi-vis.service';

describe('PiVisService', () => {
  let service: PiVisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiVisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
