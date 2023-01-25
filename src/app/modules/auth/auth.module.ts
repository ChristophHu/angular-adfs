import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { SharedModule } from 'src/app/shared/shared.module';
import { authAppInitializerFactory } from './services/auth-app-initializer.factory';
import { AuthService } from './services/auth.service';
import { authConfig, authModuleConfig } from './config/auth-config';
import { AuthGuard } from './guards/auth.guard';
import { AuthWithForcedLoginGuard } from './guards/auth-with-forced-login.guard';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [],
  imports: [
    OAuthModule.forRoot(),
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthWithForcedLoginGuard,
    OAuthService
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
        { provide: AuthConfig, useValue: authConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: OAuthStorage, useFactory: storageFactory },
      ]
    };
  }
}
