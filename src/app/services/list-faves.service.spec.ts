import { TestBed, inject } from '@angular/core/testing';

import { ListFavesService } from './list-faves.service';

describe('ListFavesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListFavesService]
    });
  });

  it('should be created', inject([ListFavesService], (service: ListFavesService) => {
    expect(service).toBeTruthy();
  }));
});
