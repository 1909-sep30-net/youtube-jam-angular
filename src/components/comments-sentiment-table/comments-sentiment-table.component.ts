import { Component, Input } from '@angular/core';
import { SentimentAnalysis } from '../../models/sentiment-analysis';
import { YoutubeComment } from 'src/models/youtube-comment';

@Component({
    selector: 'comments-sentiment-table',
    templateUrl: './comments-sentiment-table.component.html'
})
export class CommentsSentimentTableComponent {
    @Input() sentimentAnalysis:SentimentAnalysis;
    page:number = 1;
    pageSize:number = 5;

    get commentList(): YoutubeComment[] {
        return this.sentimentAnalysis.commentList
            .map((comment, i) => ({id: i + 1, ...comment}))
            .slice(
                (this.page - 1) * this.pageSize,
                (this.page - 1) * this.pageSize + this.pageSize);
    }
}
