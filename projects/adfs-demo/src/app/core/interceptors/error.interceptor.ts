import { Injectable } from "@angular/core"
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs"
import { catchError, retry } from "rxjs/operators"

import { paths } from "./const"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (!req.url.includes(paths.error)) {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        // 200 is not an error
        if (error.status == 200) return next.handle(req)

        if (error.status !== 401) {
          // 401 handled in auth.interceptor
        }

        switch(error.status) {
          case 400:
              // console.error(`bad request`) 
              break

          case 401: 
              // console.error(`unauthorized`) 
              break

          case 403: 
              // console.error(`forbidden`) 
              break;

          case 404: 
              // console.error(`not found`) 
              break

          case 500:
            // console.error(`5xx-er`) 
            break

          default:
            // console.error(`default error`) 
            break
      }
      return throwError(error)
      })
    );
  }
}