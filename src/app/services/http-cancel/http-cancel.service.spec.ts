import { TestBed } from '@angular/core/testing';

import { HttpCancelService } from './http-cancel.service';

describe('HttpCancelServiceService', () => {
  let service: HttpCancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
