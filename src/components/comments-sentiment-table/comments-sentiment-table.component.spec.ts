import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsSentimentTableComponent } from './comments-sentiment-table.component';
import { CommentsSentimentAnalysis } from 'src/models/comments-sentiment-analysis';
import { YoutubeComment } from 'src/models/youtube-comment';
import {FormsModule} from '@angular/forms';
describe('CommentsSentimentTableComponent', () => {
  let component: CommentsSentimentTableComponent;
  let fixture: ComponentFixture<CommentsSentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSentimentTableComponent ],
      imports: [NgbModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSentimentTableComponent);
    component = fixture.componentInstance;
    const mockInput = new MockCommentAnalysis();
    component.commentsSentimentAnalysis = mockInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
