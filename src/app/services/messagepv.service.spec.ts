import { TestBed } from '@angular/core/testing';

import { MessagepvService } from './messagepv.service';

describe('MessagepvService', () => {
  let service: MessagepvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagepvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
