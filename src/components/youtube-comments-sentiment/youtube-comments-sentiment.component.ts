import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SentimentAnalysis } from '../../interfaces/sentiment-analysis';
import { SentimentAnalysisService } from '../../services/sentiment-analysis.service';

@Component({
    selector: 'youtube-comments-sentiment',
    templateUrl: './youtube-comments-sentiment.component.html',
    styleUrls: ['./youtube-comments-sentiment.component.css']
})
export class YoutubeCommentsSentimentComponent {
    display:string = "empty";
    videoUrl:string;
    safeEmbedUrl:SafeResourceUrl;
    sentimentAnalysis:SentimentAnalysis;

    constructor(
        private sentimentAnalysisService:SentimentAnalysisService,
        private sanitizer:DomSanitizer) {
    }

    getCommentsSentiment(maxComments:number) {
        this.display = "loading";
        let videoId:string = new URL(this.videoUrl).searchParams.get("v");
        this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(SecurityContext.URL, "https://www.youtube.com/embed/" + videoId));
        this.sentimentAnalysisService.getSentiment(videoId, maxComments).subscribe(
            result => {
                this.sentimentAnalysis = result;
                this.display = "analysis";
            },
            error => console.error(error)
        );
    }
}
