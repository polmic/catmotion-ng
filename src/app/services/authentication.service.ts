import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable()
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  TOKEN_SESSION_ATTRIBUTE_NAME = 'token'

  public username!: string;
  public password!: string;

  constructor(private http: HttpClient) {

  }

  authenticate(username: string, password: string) {
    return this.http.get(`${environment.apiUrl}/authenticate`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    sessionStorage.setItem(this.TOKEN_SESSION_ATTRIBUTE_NAME, window.btoa(username + ":" + password))
  }

  isUserLoggedIn() {
    return sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME) !== null;
  }

}