import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'token YOUR-TOKEN-HERE'),
    });
    return next.handle(newRequest).pipe(
      catchError(error => this.handleAuthError(error))
    )
    // const authReq = req.clone({ headers: req.headers })
    // return next.handle(authReq).pipe(
    //     catchError(error => this.handleAuthError(error))
    // )
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
        console.warn(`redirect to /login`)
        this.router.navigateByUrl(`/login`)
        return of(err.message)
    }
    return throwError(err)
  }
}
