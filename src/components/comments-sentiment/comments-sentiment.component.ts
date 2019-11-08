import { Component, SecurityContext, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentsSentimentAnalysis } from '../../models/comments-sentiment-analysis';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';
import { SentimentHistoryService } from '../../services/sentiment-history.service';
import { ToastsService } from '../../services/toasts.service';
import { YoutubeUrlService } from '../../services/youtube-url.service';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'comments-sentiment',
  templateUrl: './comments-sentiment.component.html',
  styleUrls: ['./comments-sentiment.component.css']
})
export class CommentsSentimentComponent implements OnInit {
  display: string = "empty";
  videoUrl: string;
  safeEmbedUrl: SafeResourceUrl;
  commentsSentimentAnalysis: CommentsSentimentAnalysis;
  userSentimentHistory: CommentsSentimentAnalysis[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private commentsSentimentAnalysisService: CommentsSentimentAnalysisService,
    private sentimentHistoryService: SentimentHistoryService,
    private sanitizer: DomSanitizer,
    private toastsService: ToastsService,
    private youtubeUrlService: YoutubeUrlService) {
  }

  ngOnInit(): void {
    this.loadUserSentimentHistory();
  }

  loadCommentsSentiment(maxComments: number): void {
    const videoId: string | null = this.youtubeUrlService.parseYoutubeVideoId(this.videoUrl);
    if (videoId !== null) {
      this.toastsService.show('Processing...', 'Processing Youtube Video Sentiment Request');
      this.display = "loading";
      this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(SecurityContext.URL, "https://www.youtube.com/embed/" + videoId));
      this.commentsSentimentAnalysisService.getSentiment(videoId, maxComments).subscribe(result => {
        this.toastsService.show('Server Side Success: getSentiment', 'Youtube Video Sentiment Succeeded');
        this.commentsSentimentAnalysis = result;
        this.display = "analysis";
        this.addUserSentimentHistory();
      }, error => {
        this.toastsService.show('Server Side Error: getSentiment', error.message);
      });
    } else {
      this.toastsService.show('Client Side Error', 'Cannot Parse Video ID');
    }
  }

  addUserSentimentHistory(): void {
    this.authService.userProfile$.subscribe(profile => {
      this.userService.getUser(profile.email).subscribe(user => {
        this.sentimentHistoryService.addUserSentimentHistory(user, this.commentsSentimentAnalysis).subscribe(result => {
          this.toastsService.show('Server Side Success: addUserSentimentHistory', 'Sentiment History Saved');
        }, error => {
          this.toastsService.show('Server Side Error: addUserSentimentHistory', error.message);
        });
      }, error => {
        this.toastsService.show('Server Side Error: getUser', error.message);
      });
    }, error => {
      this.toastsService.show('Server Side Error: Auth0', error.message);
    });
  }

  loadUserSentimentHistory(): Promise<CommentsSentimentAnalysis[]> | null {
    this.authService.userProfile$.subscribe(profile => {
      this.userService.getUser(profile.email).subscribe(user => {
        this.sentimentHistoryService.getUserSentimentHistory(user.email).subscribe(userSentimentHistory => {
          this.toastsService.show('Server Side Success: getUserSentimentHistory', 'User Sentiment History Retrieved');
          this.userSentimentHistory = userSentimentHistory;
        }, error => {
          this.toastsService.show('Server Side Error: getUserSentimentHistory', error.message);
        });
      }, error => {
        this.toastsService.show('Server Side Error: getUser', error.message);
      });
    }, error => {
      this.toastsService.show('Server Side Error: Auth0', error.message);
    });
    return null;
  }
}
