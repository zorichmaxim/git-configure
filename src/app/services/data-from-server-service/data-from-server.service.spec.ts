import { TestBed, inject } from '@angular/core/testing';

import { DataFromServerService } from './data-from-server.service';

describe('DataFromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFromServerService]
    });
  });

  it('should be created', inject([DataFromServerService], (service: DataFromServerService) => {
    expect(service).toBeTruthy();
  }));
});
