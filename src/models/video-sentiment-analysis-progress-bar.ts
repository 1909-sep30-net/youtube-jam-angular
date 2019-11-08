export interface VideoSentimentAnalysisProgressBar {
  id: number;
  roundedSentimentScore: number;
  type: string;
  sentimentScore: number;
  videoURL: string;
  videoTitle: string;
}
