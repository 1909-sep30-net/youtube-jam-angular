import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SentimentAnalysis } from '../interfaces/sentiment-analysis';

@Injectable({
    providedIn: 'root'
})
export class SentimentAnalysisService {
    constructor(private http:HttpClient) {
    }

    getSentiment(videoId:string, maxComments:string) {
        return this.http.get<SentimentAnalysis>(
            'https://localhost:44345/sentiment',
            { params: new HttpParams().set("videoId", videoId).set("maxComments", maxComments) }
        );
    }
}
