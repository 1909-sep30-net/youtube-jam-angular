import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    readonly githubRepo:string = "https://github.com/1909-sep30-net/youtube-jam-angular";

    constructor(public auth: AuthService) { }
}
