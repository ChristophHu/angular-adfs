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
  clientId      : '0050e983-4a4e-4076-8d0d-a1b625c4aa06', // The "Auth Code + PKCE" client
  // responseType: 'code',
  // redirectUri   : 'http://dc2019.poldom.local/adfs-test/',
  redirectUri   : 'http://localhost:4200/', // 'http://dc2019.poldom.local/adfs-test/', window.location.origin + '/',
  scope         : 'openid profile email api', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: false,
  silentRefreshTimeout: 0, // For faster testing
}