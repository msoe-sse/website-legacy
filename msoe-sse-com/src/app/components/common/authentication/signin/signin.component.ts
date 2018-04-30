import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';
import { FieldConfig } from '../../../../models/common/forms/field-config.interface';

@Component({
  selector: 'sse-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public formConfig: FieldConfig[];

  constructor(private authenticationService: AuthenticationService) {
    this.formConfig = [
      {
        name: 'email',
        icon: 'fa-at',
        placeholder: 'Enter email',
        required: true,
        type: 'text'
      },
      {
        name: 'password',
        icon: 'fa-key',
        placeholder: 'Enter password',
        required: true,
        type: 'password'
      },
      {
        name: 'signin',
        icon: 'fa-sign-in',
        label: 'Sign In',
        type: 'button'
      }
    ];
  }

  ngOnInit() {
  }

  submit(event: Event): void {
    // email, password
    this.authenticationService.signIn(event['email'], event['password']);
  }

}
