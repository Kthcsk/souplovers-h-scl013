import { TestBed } from '@angular/core/testing';

import { RecipesdataService } from './recipesdata.service';

describe('RecipesdataService', () => {
  let service: RecipesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
