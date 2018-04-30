import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/layout/header/header.component';
import { FooterComponent } from './components/common/layout/footer/footer.component';
import { FirebaseService } from './services/firebase/firebase.service';
import { environment } from '../environments/environment';
import { CalendarComponent } from './components/common/widgets/calendar/calendar.component';
import { IndexComponent } from './components/pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { DxSchedulerModule } from 'devextreme-angular';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { SigninComponent } from './components/common/authentication/signin/signin.component';
import { RegisterComponent } from './components/common/authentication/register/register.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormButtonComponent } from './components/common/forms/controls/form-button/form-button.component';
import { FormInputComponent } from './components/common/forms/controls/form-input/form-input.component';
import { FormSelectComponent } from './components/common/forms/controls/form-select/form-select.component';
import { DynamicFormComponent } from './components/common/forms/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './components/common/authentication/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    IndexComponent,
    SigninComponent,
    RegisterComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFormComponent,
    ForgotPasswordComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DxSchedulerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ FirebaseService, AuthenticationService, AuthenticationGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
