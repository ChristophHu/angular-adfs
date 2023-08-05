import { HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fromEvent, mapTo, retryWhen, switchMap, throwError } from "rxjs";

@Injectable()
export class OfflineInterceptor {
    private onlineChanges$ = fromEvent(window, 'online').pipe(mapTo(true))
    
    get isOnline() {
        return navigator.onLine
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            retryWhen(errors => {
                console.log(this.isOnline)
                if (!this.isOnline) {
                    return throwError('offline');
                }
                // if (this.isOnline) {
                //     console.log(this.isOnline)
                //     return errors.pipe(switchMap(err => throwError(() => new Error(err))))
                // }

                return this.onlineChanges$
            })
        );
    }
}