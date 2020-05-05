import { TestBed } from '@angular/core/testing';

import { CubeWaveService } from './cube-wave.service';

describe('CubeWaveService', () => {
  let service: CubeWaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeWaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
