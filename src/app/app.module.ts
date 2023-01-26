import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { PageWithAuthGuardComponent } from './modules/test/page-with-auth-guard/page-with-auth-guard.component'
import { RouterModule, Routes } from '@angular/router'
import { PageWithAuthWithForcedLoginGuardComponent } from './modules/test/page-with-auth-with-forced-login-guard/page-with-auth-with-forced-login-guard.component'
import { AdfsLoginModule, AuthGuard, AuthWithForcedLoginGuard } from 'projects/adfs-login/src/public-api'

const routes: Routes = [
  { path: 'authguard', component: PageWithAuthGuardComponent, canActivate: [AuthGuard] },  
  { path: 'authwithforcedloginguard', component: PageWithAuthWithForcedLoginGuardComponent, canActivate: [AuthWithForcedLoginGuard] },  
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    PageWithAuthGuardComponent,
    PageWithAuthWithForcedLoginGuardComponent
  ],
  imports: [
    AdfsLoginModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthWithForcedLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
