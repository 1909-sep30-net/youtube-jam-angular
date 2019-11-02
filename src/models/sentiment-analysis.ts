import { YoutubeComment } from "./youtube-comment";

export interface SentimentAnalysis {
    averageSentimentScore:number;
    commentList:YoutubeComment[];
}
