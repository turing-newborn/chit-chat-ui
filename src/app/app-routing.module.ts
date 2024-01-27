import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitChatLayoutComponent } from './components/chit-chat-layout/chit-chat-layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuardGuard, isLoginGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [isLoginGuardGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [isLoginGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isLoginGuardGuard]
  },
  {
    path: 'chit-chat',
    component: ChitChatLayoutComponent,
    canActivate: [authGuardGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
