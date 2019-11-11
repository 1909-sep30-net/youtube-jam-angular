import { YoutubeComment } from './youtube-comment';

export interface UserSentiment {
  firstName: string;
  lastName: string;
  email: string;
  channelName: string;
  averageSentimentScore: number;
  videoURL: string;
  analysisDate: Date;
  commentList: YoutubeComment[];
}
