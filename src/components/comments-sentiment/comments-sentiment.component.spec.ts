import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSentimentComponent } from './comments-sentiment.component';
import {FormsModule} from '@angular/forms';
import { CommentsSentimentAnalysisService } from '../../services/comments-sentiment-analysis.service';
import { Component, Input } from '@angular/core';

describe('CommentsSentimentComponent', () => {
  let component: CommentsSentimentComponent;
  let fixture: ComponentFixture<CommentsSentimentComponent>;
  const CommentSentimentSpy = jasmine.createSpyObj('CommentsSentimentAnalysisService', ['getSentiment']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSentimentComponent, CommentsSentimentTableStubComponent],
      imports: [FormsModule],
      providers: [
        { provide: CommentsSentimentAnalysisService, useValue: CommentSentimentSpy }
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
});
@Component({ selector: 'comments-sentiment-table', template: '' })
class CommentsSentimentTableStubComponent { @Input() commentsSentimentAnalysis: any; }