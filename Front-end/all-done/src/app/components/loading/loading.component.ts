import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  is_exist: string;
  
  constructor(public auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.isConnected();

  }

  isConnected(): void {
    var myJSON;

    this.auth.user$.subscribe(result => {
      myJSON = { "email": result.email};
      this.isExist(myJSON);
    });
  }

  isExist(myJSON: string): void {
    console.log(myJSON);
    this.http.post<string>('https://www.conseil-alliance-backend.com/all-doneAPI/users/is_exist',myJSON).subscribe((is_exist: string)=> {
      this.is_exist = is_exist;
      if(this.is_exist=="true"){
        this.router.navigate(['/profile']);
      }else{
        this.router.navigate(['/add_user']);
      }
    });
  }

}
