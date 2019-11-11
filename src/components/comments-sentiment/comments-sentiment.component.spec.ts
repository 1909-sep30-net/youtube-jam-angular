import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CommentsSentimentComponent } from './comments-sentiment.component';
import {FormsModule} from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Loading } from '../loading/loading.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';
import { SentimentHistoryService } from '../../services/sentiment-history.service';
import { ToastsService } from '../../services/toasts.service';
import { YoutubeUrlService } from '../../services/youtube-url.service';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { EMPTY } from 'rxjs/internal/observable/empty';
describe('CommentsSentimentComponent', () => {
  let component: CommentsSentimentComponent;
  let fixture: ComponentFixture<CommentsSentimentComponent>;
  const CommentSentimentSpy = jasmine.createSpyObj('CommentsSentimentAnalysisService',
  ['getSentiment']);
  CommentSentimentSpy.getSentiment.and.returnValue(EMPTY);
  const authSpy = jasmine.createSpyObj('AuthService',
  ['login']);
  authSpy.userProfile$ = EMPTY;
  const userSpy = jasmine.createSpyObj('UserService',
  ['getUser']);
  const toastSpy = jasmine.createSpyObj('ToastsService',
    ['show']);
  const sentimentHistorySpy = jasmine.createSpyObj('SentimentHistoryService',
  ['getUserSentimentHistory']);
  const youtubeURLSpy = jasmine.createSpyObj('YoutubeUrlService',
   ['parseYoutubeVideoId']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSentimentComponent, CommentsSentimentTableStubComponent, UserSentimentHistoryStubComponent, Loading],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: CommentsSentimentAnalysisService, useValue: CommentSentimentSpy },
        { provide: UserService, useValue: userSpy },
        { provide: ToastsService, useValue: toastSpy },
        { provide: AuthService, useValue: authSpy },
        { provide: SentimentHistoryService, useValue: sentimentHistorySpy },
        { provide: YoutubeUrlService, useValue: youtubeURLSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load comment sentiment', () => {
    component.loadCommentsSentiment(5);
    expect(component).toBeTruthy();
  });
});
@Component({ selector: 'comments-sentiment-table', template: '' })
class CommentsSentimentTableStubComponent { @Input() commentsSentimentAnalysis: any; }

@Component({selector: 'user-sentiment-history', template: ''})
class UserSentimentHistoryStubComponent { @Input() userSentimentHistory: any;}
