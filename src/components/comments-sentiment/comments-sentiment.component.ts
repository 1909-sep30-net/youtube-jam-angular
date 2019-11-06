import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentsSentimentAnalysis } from '../../models/comments-sentiment-analysis';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';
import { ToastsService } from 'src/services/toasts.service';

@Component({
    selector: 'comments-sentiment',
    templateUrl: './comments-sentiment.component.html',
    styleUrls: ['./comments-sentiment.component.css']
})
export class CommentsSentimentComponent {
    display:string = "empty";
    videoUrl:string;
    safeEmbedUrl:SafeResourceUrl;
    commentsSentimentAnalysis:CommentsSentimentAnalysis;

    constructor(
        private commentsSentimentAnalysisService:CommentsSentimentAnalysisService,
        private sanitizer:DomSanitizer,
        private toastsService:ToastsService) {
    }

    getCommentsSentiment(maxComments:number) {
        if (!this.validYoutubeUrl(this.videoUrl)) {
            this.toastsService.show('Client Side Error', 'Invalid Youtube Video URL');
        } else {
            this.toastsService.show('Processing...', 'Processing Youtube Video Request');
            this.display = "loading";
            let videoId:string = new URL(this.videoUrl).searchParams.get("v");
            this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(SecurityContext.URL, "https://www.youtube.com/embed/" + videoId));
            this.commentsSentimentAnalysisService.getSentiment(videoId, maxComments).subscribe(result => {
                    this.toastsService.show('Server Side Success', 'Youtube Video Sentiment Succeeded');
                    this.commentsSentimentAnalysis = result;
                    this.display = "analysis";
                }, error => {
                    this.toastsService.show('Server Side Error', error);
                }
            );
        }
    }

    private validYoutubeUrl(urlText:string):boolean {
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
