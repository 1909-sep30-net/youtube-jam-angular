import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeUrlService {
  constructor() { }

  parseYoutubeVideoId(urlText: string): string | null {
    try {
      const url = new URL(urlText);
      if (this.validYoutubeUrl(url)) {
        const desktopVideoId = url.searchParams.get('v');
        return desktopVideoId ? desktopVideoId : url.pathname.split('/')[1];
      }
    } catch (_) { }
    return null;
  }

  generateYoutubeUrl(videoId: string): string {
    return 'https://www.youtube.com/watch?v=' + videoId;
  }

  validYoutubeUrl(url: URL): boolean {
    return ((url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com')
      && url.pathname === '/watch'
      && url.searchParams.get('v') !== null)
      || ((url.hostname === 'www.youtu.be' || url.hostname === 'youtu.be')
        && url.pathname !== '/');
  }
}
