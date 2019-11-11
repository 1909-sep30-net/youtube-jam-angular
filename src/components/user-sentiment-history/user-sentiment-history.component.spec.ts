import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserSentimentHistoryComponent } from './user-sentiment-history.component';
import { CommentsSentimentAnalysis } from 'src/models/comments-sentiment-analysis';
import { YoutubeComment } from 'src/models/youtube-comment';
import { YoutubeUrlService } from 'src/services/youtube-url.service';

describe('UserSentimentHistoryComponent', () => {
  let component: UserSentimentHistoryComponent;
  let fixture: ComponentFixture<UserSentimentHistoryComponent>;
  const youtubeURLSpy = jasmine.createSpyObj('YoutubeUrlService',
   ['generateYoutubeUrl']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSentimentHistoryComponent ],
      imports:[NgbModule],
      providers: [{ provide: YoutubeUrlService, useValue: youtubeURLSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSentimentHistoryComponent);
    component = fixture.componentInstance;
    const MockInput = [new mockUserSentimentHistory()];
    component.userSentimentHistory = MockInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class mockUserSentimentHistory implements CommentsSentimentAnalysis{
  averageSentimentScore: number = 0.6;
  videoURL: string = "Abc";
  analysisDate: Date = new Date();
  commentList: YoutubeComment[] = [new MockYoutubeComment()];
}
class MockYoutubeComment implements YoutubeComment{
  authorName ='Marielle Nolasco';
  content = 'Hello World';
  sentimentScore = 0.97;
}