import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userEndpoint:string = environment.apiUrl + 'Creator';

    constructor(private http:HttpClient) {
    }

    updateUser(user:User) {
        return this.http.post(
            this.userEndpoint,
            user
        );
    }
}
