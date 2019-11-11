import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSentimentComponent } from './channel-sentiment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { Loading } from '../loading/loading.component';
import { ChannelSentimentAnalysisService } from '../../services/channel-sentiment-analysis.service';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { ToastsService } from 'src/services/toasts.service';
import { EMPTY } from 'rxjs/internal/observable/empty';
describe('ChannelSentimentComponent', () => {
  let component: ChannelSentimentComponent;
  let fixture: ComponentFixture<ChannelSentimentComponent>;
  const authSpy = jasmine.createSpyObj('AuthService',
  ['login']);
  authSpy.userProfile$ = EMPTY;
  const userSpy = jasmine.createSpyObj('UserService',
  ['getUser']);
  const toastSpy = jasmine.createSpyObj('ToastsService',
    ['show']);
  const channelSentimentAnalysisSpy = jasmine.createSpyObj('ChannelSentimentAnalysisService',
  ['getSentiment']);
  channelSentimentAnalysisSpy.getSentiment.and.returnValue(EMPTY);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSentimentComponent, ChannelSentimentTableStubComponent, Loading],
      imports: [NgbModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: UserService, useValue: userSpy },
        { provide: ToastsService, useValue: toastSpy },
        { provide: AuthService, useValue: authSpy },
        { provide: ChannelSentimentAnalysisService, useValue: channelSentimentAnalysisSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();

  });
  it('should get channel sentiment', () => {
    component.getChannelSentiment('Abc');
    expect(component).toBeTruthy();
  });
});
@Component({ selector: 'channel-sentiment-table', template: '' })
class ChannelSentimentTableStubComponent { @Input() channelSentimentAnalysis: any; }
