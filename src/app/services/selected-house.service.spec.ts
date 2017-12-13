import { TestBed, inject } from '@angular/core/testing';

import { SelectedHouseService } from './selected-house.service';

describe('SelectedHouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedHouseService]
    });
  });

  it('should be created', inject([SelectedHouseService], (service: SelectedHouseService) => {
    expect(service).toBeTruthy();
  }));
});
