import { TestBed, inject } from '@angular/core/testing';

import { WorkAppSystemService } from './work-app-system.service';

describe('WorkAppSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkAppSystemService]
    });
  });

  it('should be created', inject([WorkAppSystemService], (service: WorkAppSystemService) => {
    expect(service).toBeTruthy();
  }));
});
