import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { SentimentAnalysis } from '../interfaces/sentiment-analysis';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SentimentAnalysisService {
    constructor(private http:HttpClient) {
    }

    getSentiment(videoId:string, maxComments:number):Observable<SentimentAnalysis> {
        let endpoint:string = environment.apiUrl + 'sentiment';
        return this.http.get<SentimentAnalysis>(
            endpoint,
            { params: new HttpParams().set("videoId", videoId).set("maxComments", maxComments.toString()) }
        );
    }
}
