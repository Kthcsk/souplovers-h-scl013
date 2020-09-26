import { TestBed } from '@angular/core/testing';

import { AngularfireConectionService } from './angularfire-conection.service';

describe('AngularfireConectionService', () => {
  let service: AngularfireConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularfireConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
