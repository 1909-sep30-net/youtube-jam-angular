import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    user:User = new User('', '', '', '', '');

    constructor(
        private userService:UserService,
        public auth:AuthService) {
    }

    login(form:NgForm) {
      console.log("login() executed");
      this.auth.login()
      form.reset();
    }
}
