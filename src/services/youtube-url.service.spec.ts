import { TestBed } from '@angular/core/testing';

import { YoutubeUrlService } from './youtube-url.service';

describe('YoutubeUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    expect(service).toBeTruthy();
  });

  it('should parse youtube video', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    let result = service.parseYoutubeVideoId('https://www.youtube.com/watch?v=uDJ63G1htBg');
    expect(result == 'uDJ63G1htBg').toBeTruthy();
  });

  it('should generate youtube url', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    let result = service.generateYoutubeUrl('uDJ63G1htBg');
    expect(result == 'https://www.youtube.com/watch?v=uDJ63G1htBg').toBeTruthy();
  });

  it('should validate valid url', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    const url = new URL('https://www.youtube.com/watch?v=uDJ63G1htBg');
    let result = service.validYoutubeUrl(url);
    expect(result).toBeTruthy();
  });
  it('should invalidate invalid url', () => {
    const service: YoutubeUrlService = TestBed.get(YoutubeUrlService);
    const url = new URL('https://www.youtube.com/marielle');
    let result = service.validYoutubeUrl(url);
    expect(result).toBeFalsy();
  })

});
