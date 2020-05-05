import { TestBed } from '@angular/core/testing';

import { HomeP5Service } from './home-p5.service';

describe('HomeP5Service', () => {
  let service: HomeP5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeP5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
