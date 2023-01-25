import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AdfsLoginModule } from './shared/component/adfs-login/adfs-login.module'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { AuthModule } from './modules/auth/auth.module';
import { PageWithAuthGuardComponent } from './modules/test/page-with-auth-guard/page-with-auth-guard.component'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './modules/auth/guards/auth.guard'
import { PageWithAuthWithForcedLoginGuardComponent } from './modules/test/page-with-auth-with-forced-login-guard/page-with-auth-with-forced-login-guard.component'
import { AuthWithForcedLoginGuard } from './modules/auth/guards/auth-with-forced-login.guard'

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
    AdfsLoginModule,
    AuthModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
