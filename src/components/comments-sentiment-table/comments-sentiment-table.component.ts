import { Component, Input } from '@angular/core';
import { CommentsSentimentAnalysis } from '../../models/comments-sentiment-analysis';
import { YoutubeComment } from 'src/models/youtube-comment';
import { ProgressBar } from 'src/models/progress-bar';

@Component({
  selector: 'comments-sentiment-table',
  templateUrl: './comments-sentiment-table.component.html'
})
export class CommentsSentimentTableComponent {
  @Input() commentsSentimentAnalysis: CommentsSentimentAnalysis;
  page = 1;
  pageSize = 5;

  get commentList(): YoutubeComment[] {
    return this.commentsSentimentAnalysis.commentList
      .map((comment, i) => {
        const roundedScore = Math.round(comment.sentimentScore * 100);
        return {
          id: i + 1,
          roundedSentimentScore: roundedScore,
          type: roundedScore < 33 ? 'danger' : roundedScore < 67 ? 'warning' : 'success',
          ...comment
        };
      })
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize);
  }

  get commentsSentimentAnalysisProgressBar(): ProgressBar {
    return {
      value: Math.round(this.commentsSentimentAnalysis.averageSentimentScore * 100),
      type: Math.round(this.commentsSentimentAnalysis.averageSentimentScore * 100) < 33 ? 'danger' : Math.round(this.commentsSentimentAnalysis.averageSentimentScore * 100) < 67 ? 'warning' : 'success'
    };
  }
}
