import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlValidatorService {
    constructor() {}

    validYoutubeUrl(urlText:string):boolean {
      try {
          let url = new URL(urlText);
          let searchParams = url.searchParams;
          return ((url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') && url.pathname === '/watch' && searchParams.get('v') !== null)
              || ((url.hostname === 'www.youtu.be' || url.hostname === 'youtu.be') && url.pathname !== '/');
      } catch (_) {
          return false;  
      }
    }
}
