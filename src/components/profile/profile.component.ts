import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    public auth: AuthService,
    private userService:UserService
  ) {}

  updateUser(firstName:string, lastName:string, email:string, username:string) {
    if (username !== '') {
      const user:User = new User(firstName, lastName, email, username);
      this.userService.updateUser(user).subscribe(result => {
          console.log(result);
      }, error => {
          console.error(error);
      });
    }
  }
}