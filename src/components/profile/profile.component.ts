import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastsService } from '../../services/toasts.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  channelName:string = "";

  constructor(
    public authService: AuthService,
    private userService:UserService,
    private toastsService:ToastsService
  ) {}

  ngAfterViewInit() {
    this.toastsService.show('Processing...', 'Processing Auth0 Profile');
    this.authService.userProfile$.subscribe(profile => {
      this.toastsService.show('Processing...', 'Processing Creator Profile');
      this.userService.getUser(profile.email).subscribe(user => {
        this.toastsService.show('Server Side Success: getUser', 'Channel Name Set');
        this.channelName = user.channelName;
      }, error => {
        this.toastsService.show('Server Side Error: getUser', error.message);
      });
    }, error => {
      this.toastsService.show('Server Side Error: Auth0', error.message);
    });
  }

  updateUser(firstName:string, lastName:string, email:string) {
    if (this.channelName.replace(/\s/g, "") === '') {
      this.toastsService.show('Client Side Error', 'Channel Name is Empty');
    }
    else {
      this.toastsService.show('Processing...', 'Processing User Update Request');
      const user:User = new User(firstName, lastName, email, this.channelName);
      this.userService.updateUser(user).subscribe(result => {
        this.toastsService.show('Server Side Success: updateUser', 'User Updated');
      }, error => {
        this.toastsService.show('Server Side Error: updateUser', error.message);
      });
    }
  }
}