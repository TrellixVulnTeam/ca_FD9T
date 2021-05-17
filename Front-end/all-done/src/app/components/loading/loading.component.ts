import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  is_exist: string;
  
  constructor(public auth: AuthService, private router: Router, private http: HttpClient, private profile: ProfileService) { }

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
    this.http.post<string>('https://www.conseil-alliance-backend.com/all-doneAPI/users/is_exist',myJSON).subscribe((is_exist: string)=> {
      this.is_exist = is_exist;
      if(this.is_exist=="true"){
        this.SetProfile(myJSON);
        this.router.navigate(['/list_jobs']);
      }else{
        this.router.navigate(['/add_user']);
      }
    });
  }

  SetProfile(myJSON: string) {
    this.http.post<any>('https://www.conseil-alliance-backend.com/all-doneAPI/users/profile',myJSON).subscribe((result)=> {
      this.profile.SetProfile(result["first_name"],result["last_name"],result["ent_name"],result["email"],result["is_client"],result["address"],result["city"],result["phone"],result["birth_date"],result["fourth_date"],result["about_me"],result["competences"],result["certifier"]);
    });
  }
}
