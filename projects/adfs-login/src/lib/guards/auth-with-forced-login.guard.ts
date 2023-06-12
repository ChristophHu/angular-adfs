import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { Observable, filter, switchMap, tap } from 'rxjs'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthWithForcedLoginGuard implements CanActivate {
  
  constructor(private _authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    console.log('AuthWithForcedLoginGuard.canActivate()')
    return this._authService.isDoneLoading$.pipe(
      filter(isDone => isDone),
      switchMap(() => this._authService.isAuthenticated$),
      tap(isAuthenticated => isAuthenticated || this._authService.login(state.url))
    );
  }
}
