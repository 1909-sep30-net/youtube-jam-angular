import { Component, Input } from '@angular/core';
import { YoutubeUrlService } from 'src/services/youtube-url.service';
import { CommentsSentimentAnalysis } from 'src/models/comments-sentiment-analysis';
import { CommentsSentimentAnalysisProgressBar } from 'src/models/comments-sentiment-analysis-progress-bar';

@Component({
  selector: 'user-sentiment-history',
  templateUrl: './user-sentiment-history.component.html'
})
export class UserSentimentHistoryComponent {
  @Input() userSentimentHistory: CommentsSentimentAnalysis[];

  constructor(private youtubeUrlService: YoutubeUrlService) { }

  get parsedUserSentimentHistory(): CommentsSentimentAnalysisProgressBar[] {
    return this.userSentimentHistory.map(sentiment => {
      const roundedScore = Math.round(sentiment.averageSentimentScore * 100);
      return {
        youtubeUrl: this.youtubeUrlService.generateYoutubeUrl(sentiment.videoURL),
        roundedSentimentScore: roundedScore,
        type: roundedScore < 33 ? 'danger' : roundedScore < 67 ? 'warning' : 'success',
        ...sentiment
      };
    })
      .sort((a, b) => new Date(b.analysisDate).getTime() - new Date(a.analysisDate).getTime())
      .slice(0, 5);
  }
}
