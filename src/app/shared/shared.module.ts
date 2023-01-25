import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdfsLoginModule } from './component/adfs-login/adfs-login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdfsLoginModule
  ],
  exports: [
    CommonModule,
    AdfsLoginModule
  ]
})
export class SharedModule { }
