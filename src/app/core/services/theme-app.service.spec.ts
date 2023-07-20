import { TestBed } from '@angular/core/testing';

import { ThemeAppService } from './theme-app.service';

describe('ThemeAppService', () => {
  let service: ThemeAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
