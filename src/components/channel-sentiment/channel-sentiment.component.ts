import { Component } from '@angular/core';
import { ChannelSentimentAnalysis } from '../../models/channel-sentiment-analysis';
import { ChannelSentimentAnalysisService } from '../../services/channel-sentiment-analysis.service';

@Component({
    selector: 'channel-sentiment',
    templateUrl: './channel-sentiment.component.html'
})
export class ChannelSentimentComponent {
    display:string = "empty";
    channelSentimentAnalysis:ChannelSentimentAnalysis;
    
    constructor(
        private channelSentimentAnalysisService:ChannelSentimentAnalysisService) {
    }

    getChannelSentiment(channelId:string) {
        this.display = "loading";
        this.channelSentimentAnalysisService.getSentiment(channelId).subscribe(result => {
                this.channelSentimentAnalysis = result;
                this.display = "analysis";
            }, error => {
                console.error(error);
            }
        );
    }
}
