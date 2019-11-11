import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSentimentTableComponent } from './channel-sentiment-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChannelSentimentAnalysis } from 'src/models/channel-sentiment-analysis';
import { VideoSentimentAnalysis } from 'src/models/video-sentiment-analysis';
describe('ChannelSentimentTableComponent', () => {
  let component: ChannelSentimentTableComponent;
  let fixture: ComponentFixture<ChannelSentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSentimentTableComponent],
      imports:[NgbModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSentimentTableComponent);
    component = fixture.debugElement.componentInstance;
    const ChannelSentimentAnalysisinfo : MockChannelSentiment = new MockChannelSentiment();
    component.channelSentimentAnalysis = ChannelSentimentAnalysisinfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});

class MockChannelSentiment implements ChannelSentimentAnalysis{
  averageSentiment = 0.5;
  userVideos = [new MockVideoSentiment()];
  analysisDate = new Date();
}
class MockVideoSentiment implements VideoSentimentAnalysis{
  sentimentScore:0.5;
  videoURL:"";
  videoTitle:"";
}