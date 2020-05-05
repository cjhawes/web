import { TestBed } from '@angular/core/testing';

import { FluidSimService } from './fluid-sim.service';

describe('FluidSimService', () => {
  let service: FluidSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluidSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
