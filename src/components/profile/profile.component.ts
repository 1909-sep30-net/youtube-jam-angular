import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastsService } from '../../services/toasts.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    public auth: AuthService,
    private userService:UserService,
    private toastsService:ToastsService
  ) {}

  updateUser(firstName:string, lastName:string, email:string, username:string) {
    if (username === '') {
      this.toastsService.show('Client Side Error', 'Channel Name is Empty');
    }
    else {
      this.toastsService.show('Processing...', 'Processing User Update Request');
      const user:User = new User(firstName, lastName, email, username);
      this.userService.updateUser(user).subscribe(result => {
          this.toastsService.show('Server Side Success', 'User updated');
      }, error => {
          this.toastsService.show('Server Side Error', error);
      });
    }
  }
}