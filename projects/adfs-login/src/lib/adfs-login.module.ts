import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { AdfsLoginComponent } from './adfs-login.component';
// import { authConfig, authModuleConfig } from './config/auth-config';
import { AuthWithForcedLoginGuard } from './guards/auth-with-forced-login.guard';
import { AuthGuard } from './guards/auth.guard';
import { authAppInitializerFactory } from './services/auth-app-initializer.factory';
import { AuthService } from './services/auth.service';
import { LdapConfig } from './model/ldap.model';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
// import { httpInterceptorProviders } from './interceptors';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [
    AdfsLoginComponent
  ],
  imports: [
    CommonModule,
    OAuthModule.forRoot()
  ],
  exports: [
    AdfsLoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthWithForcedLoginGuard,
    OAuthService
  ]
})
export class AdfsLoginModule {
  static forRoot(authConfig: AuthConfig, authModuleConfig: OAuthModuleConfig, ldapConfig: LdapConfig): ModuleWithProviders<AdfsLoginModule> {
    return {
      ngModule: AdfsLoginModule,
      providers: [
        { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
        { provide: AuthConfig, useValue: authConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: OAuthStorage, useFactory: storageFactory },
        { provide: LdapConfig, useValue: ldapConfig },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    }
  }
}
