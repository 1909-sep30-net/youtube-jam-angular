import { TestBed } from '@angular/core/testing';

import { YoutubeUrlService } from './youtube-url.service';

describe('YoutubeUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    expect(service).toBeTruthy();
  });
});
