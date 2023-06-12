import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'adfs-login-button',
  templateUrl: './adfs-login.component.html',
  styles: []
})
export class AdfsLoginComponent {
  isAuthenticated$: Observable<boolean>
  // isDoneLoading$: Observable<boolean>
  // canActivateProtectedRoutes$: Observable<boolean>
  
  constructor(private _authService: AuthService) {
    this.isAuthenticated$ = this._authService.isAuthenticated$
    // this.isDoneLoading$ = this._authService.isDoneLoading$
    // this.canActivateProtectedRoutes$ = this._authService.canActivateProtectedRoutes$
  }

  login() {
    console.log('login')
    this._authService.login()
  }

  logout() {
    console.log('logout')
    this._authService.logout()
  }
}
