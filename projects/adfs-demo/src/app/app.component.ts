import { Component, OnInit } from '@angular/core';
import { LdapService } from 'projects/adfs-login/src/public-api';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  constructor(private _ldapService: LdapService) { }

  ngOnInit(): void {
    const attributes: string[] = ["samaccountname", "displayName","sn","givenName", "department","extensionAttribute2","extensionattribute1", "extensionAttribute4","jpegPhoto","thumbnailPhoto", "office" ]
    this._ldapService.getAuthtest()
    .pipe(delay(500))
    .subscribe({
      next: (data) => {
        console.log('getAuthtest: ', data)
      },
      error: (error) => {
        console.log(error)
      }
    })
    this._ldapService.getUserData('24225132', attributes)
    .pipe(delay(500))
    .subscribe({
      next: (data) => {
        console.log('getUserData: ', data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}