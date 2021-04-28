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

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.myemail = null;
    while(this.myemail == null){
      console.log(this.myemail);
    }
    
  }
  
  public collect(): void {
    var myJSON;

    this.auth.user$.subscribe(result => {
      myJSON = { "email": result.email};
      console.log(myJSON);
      this.email = myJSON;
    });
    this.http.post<any>('http://15.237.22.205/all-doneAPI/users/profile',this.email).subscribe((result)=> {
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
