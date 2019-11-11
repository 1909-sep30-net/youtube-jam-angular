import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { SentimentHistoryService } from './sentiment-history.service';

describe('SentimentHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SentimentHistoryService = TestBed.get(SentimentHistoryService);
    expect(service).toBeTruthy();
  });
});
