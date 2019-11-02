import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    user:User = new User('', '', '', '', '');

    constructor(
        private userService:UserService) {
    }

    login(form:NgForm) {
      console.log("login() executes");
      form.reset();
    }
}
