import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username!: string;
  password!: string;

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login() {
    this.authenticationService.authenticate(this.username, this.password).subscribe(res => {
      this.router.navigate(['/videos']);
    }, () => {
      alert("Authentication failed.")
    });
  }

}