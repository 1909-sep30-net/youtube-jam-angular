import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userEndpoint:string = environment.apiUrl + 'Creator';

    constructor(private http:HttpClient) {}

    getUser(email:string):Observable<User> {
        return this.http.get<User>(
            this.userEndpoint + '/' + email
        );
    }

    updateUser(user:User):Observable<any> {
        return this.http.post(
            this.userEndpoint,
            user
        );
    }
}
