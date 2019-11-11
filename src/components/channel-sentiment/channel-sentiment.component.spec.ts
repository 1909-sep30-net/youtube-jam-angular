import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSentimentComponent } from './channel-sentiment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';

describe('ChannelSentimentComponent', () => {
  let component: ChannelSentimentComponent;
  let fixture: ComponentFixture<ChannelSentimentComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSentimentComponent,ChannelSentimentTableStubComponent],
      imports: [NgbModule,RouterTestingModule, HttpClientTestingModule]
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
});
@Component({ selector: 'channel-sentiment-table', template: '' })
class ChannelSentimentTableStubComponent { @Input() channelSentimentAnalysis: any; }
