import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { LdapConfig } from 'projects/adfs-login/src/lib/model/ldap.model';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [
      // 'https://dc2019.poldom.local/adfstestapi',
      // 'https://dc2022.lab-code.local/adfs',
      // 'http://localhost:4200'
      'https://polosk-lb.int.polizei.berlin.de/polwspweb/'
    ],
    sendAccessToken: true
  }
}

export const authConfig: AuthConfig = {
  // lab-code.local
  // issuer        : 'https://dc2022-v-01.lab-code.local/adfs',
  // clientId      : '0ab63671-ab50-4e60-be3a-40a30dbf4c14',
  
  // poldom.local
  // issuer        : 'https://dc2019.poldom.local/adfs',
  // clientId      : '0050e983-4a4e-4076-8d0d-a1b625c4aa06',
  // redirectUri   : 'http://localhost:4200/',
  // redirectUri   : 'http://192.168.188.89/',
  // scope         : 'openid profile email api',

  // wsp
  clientId      : 'c1780010-70a7-44d0-b8db-87009266bf08',
  issuer        : 'https://MAP-ADFS10-v.int.polizei.berlin.de/adfs',
  redirectUri   : 'https://polosk-lb.int.polizei.berlin.de/polwspweb/',

  scope         : 'openid email profile offline_access allatclaims',
  useSilentRefresh: false,
  silentRefreshTimeout: 0
}

export const ldapConfig: LdapConfig = {
  path          : 'https://ldapinfo-lb.int.polizei.berlin.de/ldap_service'
}