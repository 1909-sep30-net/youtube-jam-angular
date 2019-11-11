import { Component, AfterViewInit } from '@angular/core';
import { ChannelSentimentAnalysis } from '../../models/channel-sentiment-analysis';
import { ChannelSentimentAnalysisService } from '../../services/channel-sentiment-analysis.service';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { ToastsService } from 'src/services/toasts.service';

@Component({
  selector: 'channel-sentiment',
  templateUrl: './channel-sentiment.component.html'
})
export class ChannelSentimentComponent implements AfterViewInit {
  channelName: string = "";
  display: string = "empty";
  channelSentimentAnalysis: ChannelSentimentAnalysis;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private channelSentimentAnalysisService: ChannelSentimentAnalysisService,
    private toastsService: ToastsService) {
  }

  ngAfterViewInit() {
    this.toastsService.show('Processing...', 'Processing Auth0 Profile');
    this.authService.userProfile$.subscribe(profile => {
      this.toastsService.show('Processing...', 'Processing Creator Profile');
      this.userService.getUser(profile.email).subscribe(user => {
        this.channelName = user.channelName;
        this.getChannelSentiment(this.channelName);
      }, error => {
        this.toastsService.show('Server Side Error: getUser', error.message);
      });
    }, error => {
      this.toastsService.show('Server Side Error: Auth0', error.message);
    });
  }

  getChannelSentiment(channelId: string) {
    this.toastsService.show('Processing...', 'Processing Youtube Channel Sentiment Request');
    this.display = "loading";
    this.channelSentimentAnalysisService.getSentiment(channelId).subscribe(result => {
      this.toastsService.show('Server Side Success: getSentiment', 'Youtube Channel Sentiment Succeeded');
      this.channelSentimentAnalysis = result;
      this.display = "analysis";
    }, error => {
      this.toastsService.show('Server Side Error: getSentiment', error.message);
    }
    );
  }
}
