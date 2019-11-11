import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CommentsSentimentAnalysis } from '../models/comments-sentiment-analysis';
import { UserSentiment } from '../models/user-sentiment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentHistoryService {
  readonly userSentimentHistoryEndpoint: string = environment.apiUrl + 'UserSentimentHistory';

  constructor(private http: HttpClient) { }

  addUserSentimentHistory(user: User, sentiment: CommentsSentimentAnalysis): Observable<any> {
    const userSentiment: UserSentiment = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      channelName: user.channelName,
      averageSentimentScore: sentiment.averageSentimentScore,
      videoURL: sentiment.videoURL,
      analysisDate: sentiment.analysisDate,
      commentList: sentiment.commentList
    };
    return this.http.post<any>(
      this.userSentimentHistoryEndpoint,
      userSentiment
    );
  }

  getUserSentimentHistory(email: string): Observable<CommentsSentimentAnalysis[]> {
    return this.http.get<CommentsSentimentAnalysis[]>(
      this.userSentimentHistoryEndpoint,
      { params: new HttpParams().set('email', email) }
    );
  }
}
