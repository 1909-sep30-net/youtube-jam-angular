import { VideoSentimentAnalysis } from './video-sentiment-analysis';

export interface ChannelSentimentAnalysis {
    averageSentiment:number;
    analysisDate:Date;
    userVideos:VideoSentimentAnalysis[];
}
