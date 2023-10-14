# Services

## LDAP-Service
Der LDAP-Service ist nach der Authentifizierung für die Abfrage des Benutzers und der LDAP-Gruppen zuständig. Der Service muss nicht unmittelbar in der Library verwendet werden.
```typescript

```

### TokenInterceptor

Der `TokenInterceptor` übergibt den Anfragen den `access_token` aus dem `OAuthService`. Dieser wird benötigt um die LDAP-Abfrage durchzuführen.

```typescript
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _oauthService: OAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._oauthService.getAccessToken()}`
      }
    })
    return next.handle(request)
  }
}
```

Für den LDAP-Service wird der `TokenInterceptor` benötigt. Diese werden im `adfs-login.module.ts` registriert.
```typescript
static forRoot(authConfig: AuthConfig, authModuleConfig: OAuthModuleConfig, ldapConfig: LdapConfig): ModuleWithProviders<AdfsLoginModule> {
    return {
      ngModule: AdfsLoginModule,
      providers: [
        ...
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    }
  }
```