import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  secondFormGroup: FormGroup;
  email: string;
  
  constructor(private _formBuilder: FormBuilder, public auths: AuthService, private http: HttpClient, private router: Router) { }

  getEmaill(): string {

    var myJSON;

    this.auths.user$.subscribe(result => {
      myJSON = { "email": result.email};
      this.email = result.email;
    });
    return this.email;
  }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      email: [''],
      name: ['', Validators.required],
      nb_users: ['', Validators.required],
      competences: ['', Validators.required],
      about_job: ['', Validators.required],
      horaire: ['', Validators.required],
      type_job: ['', Validators.required],
    });

    //this.create();
  }

  create(): void{

    this.auths.user$.subscribe(result => {
      this.email = result.email;
    });
    this.secondFormGroup.value.email = this.email;
    console.log(this.secondFormGroup.value);
    this.http.post<string>('https://www.conseil-alliance-backend.com/all-doneAPI/jobs/create_job',this.secondFormGroup.value).subscribe((result: string)=> {
      
      if(result=="job created"){
        console.log("création réussi !!!");
        this.router.navigate(['/profile']);
      }else{
        console.log("création échouer !!!");
        this.router.navigate(['/create_jobs']);
      }

    });
  
  }

}
