import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CommentsSentimentAnalysis } from '../models/comments-sentiment-analysis';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommentsSentimentAnalysisService {
    videoSentimentEndpoint:string = environment.apiUrl + 'VideoSentiment';

    constructor(private http:HttpClient) {
    }

    getSentiment(videoId:string, maxComments:number):Observable<CommentsSentimentAnalysis> {
        return this.http.get<CommentsSentimentAnalysis>(
            this.videoSentimentEndpoint,
            { params: new HttpParams().set("videoId", videoId).set("maxComments", maxComments.toString()) }
        );
    }
}
