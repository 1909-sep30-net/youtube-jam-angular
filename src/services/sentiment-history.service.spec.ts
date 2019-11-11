import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { SentimentHistoryService } from './sentiment-history.service';
import { User } from 'src/models/user';
import { CommentsSentimentAnalysis } from 'src/models/comments-sentiment-analysis';
import { YoutubeComment } from 'src/models/youtube-comment';

describe('SentimentHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SentimentHistoryService = TestBed.get(SentimentHistoryService);
    expect(service).toBeTruthy();
  });
  it('get user sentiment history should get something', () =>{
    const service: SentimentHistoryService = TestBed.get(SentimentHistoryService);
    let result = service.getUserSentimentHistory('mtnolasco@up.edu.ph');
    expect(result).toBeTruthy();
  });
  it('add user sentiment history should add something', () => {
    const service: SentimentHistoryService = TestBed.get(SentimentHistoryService);
    let inputUser:User = new User('Marielle', 'Nolasco', 'mtnolasco@up.edu.ph', 'Mathemars');
    let inputAnalysis : MockCommentAnalysis = new MockCommentAnalysis();
    let result = service.addUserSentimentHistory(inputUser, inputAnalysis);
    expect(result).toBeTruthy();
  })
});
class MockCommentAnalysis implements CommentsSentimentAnalysis {
  averageSentimentScore = 0.5;
  videoURL = 'hell';
  analysisDate: Date = new Date();
  commentList = [new MockYoutubeComment()];
}
class MockYoutubeComment implements YoutubeComment {
  authorName = 'Marielle Nolasco';
  content = 'Hello World';
  sentimentScore = 0.97;
}
