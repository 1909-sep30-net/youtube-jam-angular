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
});
