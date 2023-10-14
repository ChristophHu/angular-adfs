import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { paths } from "./const";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes("header")) {
      return next.handle(req)
    }
    console.warn("HeaderInterceptor")

    const modified = req.clone({ 
      setHeaders: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } 
    })

    return next.handle(modified)
  }
}
