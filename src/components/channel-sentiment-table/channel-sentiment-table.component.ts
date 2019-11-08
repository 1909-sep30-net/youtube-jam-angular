import { Component, Input } from '@angular/core';
import { ChannelSentimentAnalysis } from '../../models/channel-sentiment-analysis'
import { VideoSentimentAnalysisProgressBar } from '../../models/video-sentiment-analysis-progress-bar';
import { ProgressBar } from 'src/models/progress-bar';

@Component({
  selector: 'channel-sentiment-table',
  templateUrl: './channel-sentiment-table.component.html'
})
export class ChannelSentimentTableComponent {
  @Input() channelSentimentAnalysis: ChannelSentimentAnalysis;

  get videoList(): VideoSentimentAnalysisProgressBar[] {
    return this.channelSentimentAnalysis.userVideos
      .map((video, i) => {
        const roundedScore = Math.round(video.sentimentScore * 100);
        return {
          id: i + 1,
          roundedSentimentScore: roundedScore,
          type: roundedScore < 33 ? 'danger' : roundedScore < 67 ? 'warning' : 'success',
          ...video
        }
      });
  }

  get channelSentimentAnalysisProgressBar(): ProgressBar {
    return {
      value: Math.round(this.channelSentimentAnalysis.averageSentiment * 100),
      type: Math.round(this.channelSentimentAnalysis.averageSentiment * 100) < 33 ? 'danger' : Math.round(this.channelSentimentAnalysis.averageSentiment * 100) < 67 ? 'warning' : 'success'
    }
  }
}
