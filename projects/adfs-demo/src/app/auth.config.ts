import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { LdapConfig } from 'projects/adfs-login/src/lib/model/ldap.model';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [
      'https://polosk-lb.int.polizei.berlin.de/polwspweb/'
    ],
    sendAccessToken: true
  }
}

export const authConfig: AuthConfig = {
  // polwspweb
  clientId      : 'c1780010-70a7-44d0-b8db-87009266bf08',
  issuer        : 'https://MAP-ADFS10-v.int.polizei.berlin.de/adfs',
  redirectUri   : 'https://polosk-lb.int.polizei.berlin.de/polwspweb/',

  scope         : 'openid email profile offline_access allatclaims',
  useSilentRefresh: false,
  silentRefreshTimeout: 0
}

export const ldapConfig: LdapConfig = {
  backendUrl    : 'https://ldapinfo-lb.int.polizei.berlin.de/ldap_service',
  authtest      : '/ldap/authtest',
  user_path     : '/ldap/lookup',
  group_path    : '/ldap/memberof',
}