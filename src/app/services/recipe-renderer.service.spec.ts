import { TestBed } from '@angular/core/testing';

import { RecipeRendererService } from './recipe-renderer.service';

describe('RecipeRendererService', () => {
  let service: RecipeRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
