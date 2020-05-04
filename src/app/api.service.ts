import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Client } from './client';
import { Static } from './static';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCases(): Observable<Client[]> {
    return this.http.get<Client[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  getCasesById(id: string): Observable<Client> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      tap(_ => console.log(`fetched cases id=${id}`)),
      catchError(this.handleError<Client>(`getCasesById id=${id}`))
    );
  }

  addCases(cases: Client): Observable<Client> {
    return this.http.post<Client>(apiUrl, cases, httpOptions).pipe(
      tap((c: Client) => console.log(`added cases w/ id=${c._id}`)),
      catchError(this.handleError<Client>('addCases'))
    );
  }

  updateCases(id: string, cases: Client): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }

  deleteCases(id: string): Observable<Client> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Client>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cases id=${id}`)),
      catchError(this.handleError<Client>('deleteCases'))
    );
  }

  getStatistic(status: string): Observable<Static> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Static>(url).pipe(
      tap(_ => console.log(`fetched statistic status=${status}`)),
      catchError(this.handleError<Static>(`getStatistic status=${status}`))
    );
  }

}

