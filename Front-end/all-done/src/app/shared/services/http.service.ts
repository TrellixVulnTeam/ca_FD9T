import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from '../models/jobs.model';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private list_jobs = 'https://15.237.22.205/all-doneAPI/jobs/list_job';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.list_jobs)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Jobs[]>('getJobs', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
