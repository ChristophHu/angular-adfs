import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdfsLoginComponent } from './adfs-login.component';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@NgModule({
  declarations: [
    AdfsLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdfsLoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AdfsLoginModule { }
