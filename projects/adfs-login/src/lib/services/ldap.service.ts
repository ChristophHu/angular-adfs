import { Injectable, Optional } from '@angular/core';
import { LdapConfig } from '../model/ldap.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LdapService {

  config: any

  constructor(private http: HttpClient, @Optional() ldapConfig: LdapConfig) {
    console.log(ldapConfig)
    this.config = ldapConfig
  }

  public getAuthtest(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${this.config.backendUrl}${this.config.authtest}`)
      .subscribe({
        next: (data: any) => {         
          observer.next(data)
          console.log('getAuthtest: ', data)
        },
        error: (error:any)=>{ 
          observer.error(error)
        }
      })
    })
  }

  public getUserData(persnr: string, attributes: string[]): Observable<any> {
    return new Observable((observer) => {
      let params = { filter: persnr, attributes: attributes }

      this.http.post(`${this.config.backendUrl}${this.config.user_path}`, params)
      .subscribe({
        next: (data: any) => {         
          observer.next(data)
        },
        error: (error:any)=>{ 
          observer.error(error)
        }
      })
    })
  }

  public isMemberOf(persnr:string, groupdn: string): Observable<boolean> {
    return new Observable((observer) => {
      let params = { "samaccountname": persnr, "groupdn": groupdn }

      this.http.post(`${this.config.backendUrl}${this.config.user_path}`, params)
      .pipe(timeout(10000))
      .subscribe({
        next: (data: any) => {  
          console.log('isMemberOf: ', data)                  
          observer.next(true)
        },
        error:(error:any)=>{
          observer.next(false)
        }
      })
    })
  }
}
