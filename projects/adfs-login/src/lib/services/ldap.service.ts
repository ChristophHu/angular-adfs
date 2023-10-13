import { Inject, Injectable, Optional } from '@angular/core';
import { LdapConfig } from '../model/ldap.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LdapService {

  // constructor(@Inject('ldapConfig') private ldapConfig: LdapConfig) {
  //   console.log(ldapConfig)
  // }

  backendUrl?: string = "https://ldapinfo-lb.int.polizei.berlin.de/ldap_service";
  userData?:any;

  constructor(private oauthService: OAuthService, private http: HttpClient, @Optional() ldapConfig?: LdapConfig) {
    console.log(ldapConfig)
  }

  public getUserData(persnr: string, attributes: string[] = 
    ["samaccountname", 
     "displayName","sn","givenName",
     "department","extensionAttribute2","extensionattribute1",
     "extensionAttribute4","jpegPhoto","thumbnailPhoto",
 //    "postalCode","l","facsimileTelephoneNumber","st","telephoneNumber","mail","mobile","streetAddress","title","distinguishedName", 
     "office" ]): Promise<any> {
    return new Promise((resolve, reject) => {
      
      if (this.userData)
      {
        console.log(this.userData)
        resolve(this.userData);
        return;
      }

      let params = { filter: persnr, attributes: attributes };
      this.http.post(`${this.backendUrl}/ldap/lookup`, params, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
        },
        observe: 'response'
      })
      .pipe(timeout(30000))
      .subscribe(
        {
          next:(data:HttpResponse<any>)=>{         
            this.userData=data.body;    
            console.log(data.body)
            resolve(data.body);
          },
          error:(error:any)=>{reject(error);}
        });
    });
  }

  public isMemberOf(persnr:string, groupdn: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
    
      let params = {
        "samaccountname": persnr,
        "groupdn": groupdn
      };

      this.http.post(`${this.backendUrl}/ldap/memberof`, params, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
        },
        observe: 'response'
      })
      .pipe(timeout(10000))
      .subscribe(
        {
          next:(data:HttpResponse<any>)=>{                    
            resolve(true);
          },
          error:(error:any)=>{
            resolve(false);
          }
        });
    });

   
  }
}
