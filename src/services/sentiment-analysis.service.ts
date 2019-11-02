import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { SentimentAnalysis } from '../models/sentiment-analysis';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SentimentAnalysisService {
    sentimentEndpoint:string = environment.apiUrl + 'sentiment';

    constructor(private http:HttpClient) {
    }

    getSentiment(videoId:string, maxComments:number):Observable<SentimentAnalysis> {
        return this.http.get<SentimentAnalysis>(
            this.sentimentEndpoint,
            { params: new HttpParams().set("videoId", videoId).set("maxComments", maxComments.toString()) }
        );
    }
}
