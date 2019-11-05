import { Component, Input } from '@angular/core';
import { ChannelSentimentAnalysis } from '../../models/channel-sentiment-analysis';

@Component({
    selector: 'channel-sentiment-table',
    templateUrl: './channel-sentiment-table.component.html'
})
export class ChannelSentimentTableComponent {
    @Input() channelSentimentAnalysis:ChannelSentimentAnalysis;
}
