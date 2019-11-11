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
  it('get user sentiment history should get something', () =>{
    const service: SentimentHistoryService = TestBed.get(SentimentHistoryService);
    let result = service.getUserSentimentHistory('mtnolasco@up.edu.ph');
    expect(result).toBeTruthy();
  });
});
