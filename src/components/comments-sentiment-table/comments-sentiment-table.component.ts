import { Component, Input } from '@angular/core';
import { SentimentAnalysis } from '../../interfaces/sentiment-analysis';

@Component({
    selector: 'comments-sentiment-table',
    templateUrl: './comments-sentiment-table.component.html'
})
export class CommentsSentimentTableComponent {
    @Input() sentimentAnalysis:SentimentAnalysis;
}
