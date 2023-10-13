import { Component, OnInit } from '@angular/core';
import { LdapService } from 'projects/adfs-login/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  constructor(private _ldapService: LdapService) { }

  ngOnInit(): void {
    this._ldapService.getUserData('24225132').then((data) => {
      console.log(data);
    });
  }
}