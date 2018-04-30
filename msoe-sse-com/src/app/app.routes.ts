import { CalendarComponent } from './components/common/widgets/calendar/calendar.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';
import { SigninComponent } from './components/common/authentication/signin/signin.component';
import { CanActivate } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { RegisterComponent } from './components/common/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/common/authentication/forgot-password/forgot-password.component';

export const routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'calendar', component: CalendarComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'home' , component: IndexComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: IndexComponent } // TODO: Make "404" page
];
