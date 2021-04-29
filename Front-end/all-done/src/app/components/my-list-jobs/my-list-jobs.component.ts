import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

export interface PeriodicElement {
  id: number;
  name: string;
  nb_users: number;
  competences: string;
  about_job: string;
  horaire: string;
  type_job: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Component({
  selector: 'app-my-list-jobs',
  templateUrl: './my-list-jobs.component.html',
  styleUrls: ['./my-list-jobs.component.scss']
})
export class MyListJobsComponent implements OnInit {
  brandList: string[] = null;
  displayedColumns: string[] = ['id', 'name', 'nb_users', 'competences','about_job','horaire','type_job'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource: PeriodicElement = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  email: string;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


    this.collect();

  }

  public collect(): void {
    var myJSON;
    var i: number;

    this.auth.user$.subscribe(result => {
      myJSON = {"email": result.email};
      this.email = myJSON;
    });

    this.http.post<any>('http://15.237.22.205/all-doneAPI/jobs/my_job',this.email).subscribe((result)=> {
      console.log(result);
      this.brandList = result;
      this.dataSource = new MatTableDataSource<any>(result);

    });

  }

}
