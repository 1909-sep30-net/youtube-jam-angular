import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CommentsSentimentAnalysisService } from './comments-sentiment-analysis.service';

describe('CommentsSentimentAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CommentsSentimentAnalysisService = TestBed.get(CommentsSentimentAnalysisService);
    expect(service).toBeTruthy();
  });
  it('get sentiment should get something', () => {
    const service: CommentsSentimentAnalysisService = TestBed.get(CommentsSentimentAnalysisService);
    let result = service.getSentiment('uDJ63G1htBg', 5);
    expect(result).toBeTruthy();
  })
});
