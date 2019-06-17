import { TestBed } from '@angular/core/testing';

import { DbFireService } from './db-fire.service';

describe('DbFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbFireService = TestBed.get(DbFireService);
    expect(service).toBeTruthy();
  });
});
