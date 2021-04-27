import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  tycompte: boolean = true;

  isClient(): boolean{
    return this.tycompte;
  }

  isEmployeur(): boolean{
    if (this.tycompte==false){
      return true;
    }else{
      return false;
    }
  }

  selectD(): void{
    this.tycompte = true;
  }

  selectR(): void{
    this.tycompte = false;
  }

  email: string;

  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,public auth: AuthService, private http: HttpClient, private router: Router) {}
  
  getEmail(): string {

    var myJSON;

    this.auth.user$.subscribe(result => {
      myJSON = {"email": result.email};
      this.email = result.email;
    });

    return this.email;
  }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      ent_name: [''],
      email: [this.getEmail()],
      is_client: [this.tycompte],
      address: [''],
      city: ['Djibouti'],
      phone: ['', Validators.required],
      birth_date: [''],
      fourth_date: [''],
      about_me: [''],
      competences: ['']
    });
  }

  create(): void{
    if(this.firstFormGroup.value.is_client==true){
      this.firstFormGroup.value.fourth_date = this.firstFormGroup.value.birth_date;
      this.firstFormGroup.value.ent_name = null;
    }else{
      this.firstFormGroup.value.birth_date = this.firstFormGroup.value.fourth_date;
      this.firstFormGroup.value.competences = null;
    }

    this.http.post<string>('https://15.237.22.205/all-doneAPI/users/add_users',this.firstFormGroup.value).subscribe((result: string)=> {

      if(result=="user created"){
        console.log("création réussi !!!");
        this.router.navigate(['/profile']);
      }else{
        console.log("création échouer !!!");
        this.router.navigate(['/add_user']);
      }

    });
  
  }
}
