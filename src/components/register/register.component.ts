import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    user:User = new User('', '', '', '', '');

    constructor(
        private userService:UserService) {
    }

    createUser(form:NgForm) {
        this.userService.createUser(this.user).subscribe(result => {
                console.log(result);
            }, error => {
                console.error(error);
            }
        );
        form.reset();
    }
}
