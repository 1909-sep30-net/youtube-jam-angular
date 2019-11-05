import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ChannelSentimentAnalysis } from '../models/channel-sentiment-analysis';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChannelSentimentAnalysisService {
    channelSentimentEndpoint:string = environment.apiUrl + 'ChannelSentiment';

    constructor(private http:HttpClient) {
    }

    getSentiment(channelId:string):Observable<ChannelSentimentAnalysis> {
        return this.http.get<ChannelSentimentAnalysis>(
            this.channelSentimentEndpoint,
            { params: new HttpParams().set("channel", channelId) }
        );
    }
}
