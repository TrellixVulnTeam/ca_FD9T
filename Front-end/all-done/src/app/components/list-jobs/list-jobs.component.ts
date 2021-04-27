import { Jobs } from './../../shared/models/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

//import {Jobs} from './src/app/shared/models/jobs.model';
import { HttpService } from 'src/app/shared/services/http.service';

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

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  
  brandList: string[] = null;
  displayedColumns: string[] = ['id', 'name', 'nb_users', 'competences','about_job','horaire','type_job'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource: PeriodicElement = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  email: string;
  
  test: PeriodicElement;

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
      this.email = result.email;
      console.log(this.email);
    });

    this.http.get<any>('https://15.237.22.205/all-doneAPI/jobs/list_job').subscribe((result)=> {
      
      this.brandList = result;
      this.dataSource = new MatTableDataSource<any>(result);
      /////////////////
      
      //console.log(result[0]["id"]);
    });

  }

}
