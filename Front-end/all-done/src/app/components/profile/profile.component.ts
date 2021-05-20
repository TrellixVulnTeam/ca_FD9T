import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  email: string;

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

  constructor(public auth: AuthService, private http: HttpClient, private profile: ProfileService) {
    //this.collect();
    //this.ngOnInit();
   }

  ngOnInit(): void {
    this.first_name = this.profile.getfirst_name();
    this.last_name = this.profile.getlast_name();
    this.ent_name = this.profile.getent_name();
    this.myemail = this.profile.getmyemail();
    this.is_client = this.profile.getis_client();
    this.address = this.profile.getaddress();
    this.city = this.profile.getcity();
    this.phone = this.profile.getphone();
    this.birth_date = this.profile.getbirth_date();
    this.fourth_date = this.profile.getfourth_date();
    this.about_me = this.profile.getabout_me();
    this.competences = this.profile.getcompetences();
    this.certifier = this.profile.getcertifier();
    console.log(this.profile.getaddress());
  }
  
  public collect(): void {
    var myJSON;

    this.auth.user$.subscribe(result => {
      myJSON = { "email": result.email};
      console.log(myJSON);
      this.email = myJSON;
    });
    this.http.post<any>('https://www.conseil-alliance-backend.com/all-doneAPI/users/profile',this.email).subscribe((result)=> {
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
    });
  }
}
