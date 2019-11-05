import { YoutubeComment } from "./youtube-comment";

export interface CommentsSentimentAnalysis {
    averageSentimentScore:number;
    videoURL:string;
    analysisDate:Date;
    commentList:YoutubeComment[];
}
