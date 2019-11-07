import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentsSentimentAnalysis } from '../../models/comments-sentiment-analysis';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';
import { ToastsService } from '../../services/toasts.service';
import { UrlValidatorService } from '../../services/url-validator.service';

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
        private toastsService:ToastsService,
        private urlValidatorService:UrlValidatorService) {
    }

    getCommentsSentiment(maxComments:number) {
        if (this.urlValidatorService.validYoutubeUrl(this.videoUrl)) {
            this.toastsService.show('Processing...', 'Processing Youtube Video Sentiment Request');
            this.display = "loading";
            let videoId:string = new URL(this.videoUrl).searchParams.get("v");
            this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(SecurityContext.URL, "https://www.youtube.com/embed/" + videoId));
            this.commentsSentimentAnalysisService.getSentiment(videoId, maxComments).subscribe(result => {
                    this.toastsService.show('Server Side Success: getSentiment', 'Youtube Video Sentiment Succeeded');
                    this.commentsSentimentAnalysis = result;
                    this.display = "analysis";
                }, error => {
                    this.toastsService.show('Server Side Error: getSentiment', error.message);
                }
            );
        } else {
            this.toastsService.show('Client Side Error', 'Invalid Youtube Video URL');
        }
    }
}
