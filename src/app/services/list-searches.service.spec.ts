import { TestBed, inject } from '@angular/core/testing';

import { ListSearchesService } from './list-searches.service';

describe('ListSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListSearchesService]
    });
  });

  it('should be created', inject([ListSearchesService], (service: ListSearchesService) => {
    expect(service).toBeTruthy();
  }));
});
