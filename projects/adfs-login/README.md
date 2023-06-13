# AdfsLogin

## Use
Import the `AdfsLoginModule` in the `app.module.ts`.
```typescript
    imports: [
        AdfsLoginModule.forRoot(
            authConfig,
            authModuleConfig
        ),
        ...
    ]
```
The `authConfig` and `authModuleConfig` are seperated into an config with the following content:
```typescript
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [
      'https://dc2019.poldom.local/adfstestapi',
      'http://localhost:4200'
    ],
    sendAccessToken: true,
  }
}

export const authConfig: AuthConfig = {
  issuer        : 'https://dc2019.poldom.local/adfs',
  clientId      : '0050e983-4a4e-4076-8d0d-a1b625c4aa06',
  redirectUri   : 'http://localhost:4200/',
  scope         : 'openid profile email api',
  useSilentRefresh: false,
  silentRefreshTimeout: 0
}
```

## Guards
There are two Guards:
1. AuthGuard and
2. AuthWithForcedLoginGuard

### AuthGuard
The AuthGuard will route you if you are logged in. If you are not logged in, that guard interrupt the route-process.

### AuthWithForcedLoginGuard
Like the AuthGuard the AuthWithForcedLoginGuard will route you if you are logged in. If not, this will route you to the login-page.