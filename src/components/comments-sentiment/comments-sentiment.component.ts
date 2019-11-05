import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentsSentimentAnalysis } from '../../models/comments-sentiment-analysis';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';

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
        private sanitizer:DomSanitizer) {
    }

    getCommentsSentiment(maxComments:number) {
        this.display = "loading";
        let videoId:string = new URL(this.videoUrl).searchParams.get("v");
        this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(SecurityContext.URL, "https://www.youtube.com/embed/" + videoId));
        this.commentsSentimentAnalysisService.getSentiment(videoId, maxComments).subscribe(result => {
                this.commentsSentimentAnalysis = result;
                this.display = "analysis";
            }, error => {
                console.error(error);
            }
        );
    }
}
