import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private auth:AuthService
  ) {}

  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
}
