import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {

    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('ALL: ' /* + JSON.stringify(data)*/)),
            catchError(this.handleError)
        );
    }

private handleError(err: HttpErrorResponse) {
// in a real world app, we may send the server to some remote logging infrastructure
// instead of just logging it to the console
// tslint:disable-next-line:prefer-const
let errorMessage = '';
if (err.error instanceof ErrorEvent) {
    // A client-side or network error occured. Handle it accordingly
    errorMessage = `An error occured: ${err.error.message}`;
 } else {
     // The backend returned an unsucessful response code.
     // The response body may contain clues as to what wen wrong
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
 }
 console.error(errorMessage);
 return throwError(errorMessage);
}

}
