import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderService } from './services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  
  constructor(private _loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loaderService.showLoader()
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => this._loaderService.hideLoader())
    )
  }
}