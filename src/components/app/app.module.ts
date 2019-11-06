import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ToastsComponent } from '../toasts/toasts.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HomeComponent } from '../home/home.component';
import { CommentsSentimentComponent } from '../comments-sentiment/comments-sentiment.component';
import { CommentsSentimentTableComponent } from '../comments-sentiment-table/comments-sentiment-table.component';
import { ChannelSentimentComponent } from '../channel-sentiment/channel-sentiment.component';
import { ChannelSentimentTableComponent } from '../channel-sentiment-table/channel-sentiment-table.component';
import { ProfileComponent } from '../profile/profile.component';

import { AuthGuard } from '../../guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ToastsComponent,
    NavMenuComponent,
    HomeComponent,
    CommentsSentimentComponent,
    CommentsSentimentTableComponent,
    ChannelSentimentComponent,
    ChannelSentimentTableComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'comments-sentiment', component: CommentsSentimentComponent },
      { path: 'channel-sentiment', component: ChannelSentimentComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
      
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
