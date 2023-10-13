import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule, Routes } from '@angular/router';
import { PageWithAuthGuardComponent } from './modules/test/page-with-auth-guard/page-with-auth-guard.component';
import { PageWithAuthWithForcedLoginGuardComponent } from './modules/test/page-with-auth-with-forced-login-guard/page-with-auth-with-forced-login-guard.component';
import { PageWithNoGuardComponent } from './modules/test/page-with-no-guard/page-with-no-guard.component';
import { authConfig, authModuleConfig, ldapConfig } from './auth.config';
// import { AdfsLoginModule, AuthGuard, AuthWithForcedLoginGuard } from '@christophhu/adfs-login';
import { LdapService } from './shared/ldap.service';
import { AdfsLoginModule, AuthGuard, AuthWithForcedLoginGuard } from 'projects/adfs-login/src/public-api';
// import { AdfsLoginModule, AuthGuard, AuthWithForcedLoginGuard } from 'dist/adfs-login/public-api';
// import { AdfsLoginModule, AuthGuard, AuthWithForcedLoginGuard } from 'projects/adfs-login/src/public-api';

const routes: Routes = [
  { path: 'authguard', component: PageWithAuthGuardComponent, canActivate: [AuthGuard] },
  { path: 'authwithforcedloginguard', component: PageWithAuthWithForcedLoginGuardComponent, canActivate: [AuthWithForcedLoginGuard] },
  { path: '', component: PageWithNoGuardComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    PageWithAuthGuardComponent,
    PageWithAuthWithForcedLoginGuardComponent,
    PageWithNoGuardComponent
  ],
  imports: [
    AdfsLoginModule.forRoot(
      authConfig,
      authModuleConfig,
      ldapConfig
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    LdapService
    // { provide: OAuthStorage, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
