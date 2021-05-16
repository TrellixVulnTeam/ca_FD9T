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

  //////////////////////
  first_name: string;
  last_name: string;
  ent_name: string;
  myemail: string;
  is_client: string;
  address: string;
  city: string;
  phone: string;
  birth_date: string;
  fourth_date: string;
  about_me: string;
  competences: string;
  certifier: string;
  //////////////////////
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
        this.profile(myJSON);
        this.router.navigate(['/profile']);
      }else{
        this.router.navigate(['/add_user']);
      }
    });
  }

  profile(myJSON: string) {
    this.http.post<any>('https://www.conseil-alliance-backend.com/all-doneAPI/users/profile',myJSON).subscribe((result)=> {
      this.first_name = result["first_name"];
      this.last_name = result["last_name"];
      this.ent_name = result["ent_name"];
      this.myemail = result["email"];
      this.is_client = result["is_client"];
      this.address = result["address"];
      this.city = result["city"];
      this.phone = result["phone"];
      this.birth_date = result["birth_date"];
      this.fourth_date = result["fourth_date"];
      this.about_me = result["about_me"];
      this.competences = result["competences"];
      this.certifier = result["certifier"];
      console.log(this.address);
    });
  }

}
