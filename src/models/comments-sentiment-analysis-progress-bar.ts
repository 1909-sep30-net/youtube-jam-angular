import { YoutubeComment } from "./youtube-comment";

export interface CommentsSentimentAnalysisProgressBar {
  youtubeUrl: string;
  roundedSentimentScore: number;
  type: string;
  averageSentimentScore: number;
  videoURL: string;
  analysisDate: Date;
  commentList: YoutubeComment[];
}
