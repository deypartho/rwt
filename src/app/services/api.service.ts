import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError, from } from 'rxjs';
import { catchError, tap, map, timeout } from 'rxjs/operators';

import { Riverwalk } from '../interface/riverwalk';
import { SpecialMenu } from '../interface/special-menu';

const REST_API_SERVER = "http://tandoor.secongod.com/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getSlider(){
    return this.httpClient.get(REST_API_SERVER+'getslider');
  }
  getRiverwalk(action: string): Observable<Riverwalk[]> {
    const url = `${REST_API_SERVER}${action}`;
    return this.httpClient.get<Riverwalk[]>(url)
      .pipe(
        timeout(5000),
        tap(Riverwalk => console.log(Riverwalk)),
        catchError(err => {
        throw err;
        })
      );
  }

  getSpecialMenu(action: string): Observable<SpecialMenu[]> {

    const url = `${REST_API_SERVER}${action}`;

    return this.httpClient.get<SpecialMenu[]>(url)

      .pipe(

        timeout(5000),

        tap(Riverwalk => console.log(Riverwalk)),

        catchError(err => {

        throw err;

        })

      );

  }


}
