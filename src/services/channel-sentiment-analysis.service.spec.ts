import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ChannelSentimentAnalysisService } from './channel-sentiment-analysis.service';

describe('ChannelSentimentAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ChannelSentimentAnalysisService = TestBed.get(ChannelSentimentAnalysisService);
    expect(service).toBeTruthy();
  });
});
