import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [
      'https://dc2019.poldom.local/adfstestapi',
      'https://dc2022.lab-code.local/adfs',
      'http://localhost:4200'
    ],
    sendAccessToken: true
  }
}

export const authConfig: AuthConfig = {
  // lab-code.local
  issuer        : 'https://dc2022-v-01.lab-code.local/adfs',
  clientId      : '0ab63671-ab50-4e60-be3a-40a30dbf4c14',
  
  // poldom.local
  // issuer        : 'https://dc2019.poldom.local/adfs',
  // clientId      : '0050e983-4a4e-4076-8d0d-a1b625c4aa06',
  
  redirectUri   : 'http://localhost:4200/',
  scope         : 'openid profile email api',
  useSilentRefresh: false,
  silentRefreshTimeout: 0
}