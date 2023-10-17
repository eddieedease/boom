import { TestBed } from '@angular/core/testing';

import { BoomserService } from './boomser.service';

describe('BoomserService', () => {
  let service: BoomserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
