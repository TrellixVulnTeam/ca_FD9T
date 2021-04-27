import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public auth: AuthService){}
  
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
  
  signupWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin });
  }

  ngOnInit(): void {
  }

}
