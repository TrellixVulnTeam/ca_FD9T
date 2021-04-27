import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  email: string;

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.collect();
  }
  
  public collect(): void {
    var myJSON;
    var i: number;

    this.auth.user$.subscribe(result => {
      myJSON = {"email": result.email};
      this.email = result.email;
      console.log(this.email);
    });
    var test: string = "abokor.etude@gmail.com";
    this.http.post<any>('https://15.237.22.205/all-doneAPI/users/profile',test).subscribe((result)=> {
      console.log(result);
    });

  }

}
