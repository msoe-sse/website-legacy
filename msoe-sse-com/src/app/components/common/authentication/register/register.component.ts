import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';
import { FieldConfig } from '../../../../models/common/forms/field-config.interface';

@Component({
  selector: 'sse-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formConfig: FieldConfig[];

  constructor(private authenticationService: AuthenticationService) {
    this.formConfig = [
      {
        name: 'firstname',
        icon: 'fa-user',
        placeholder: 'Enter first name',
        required: true,
        type: 'text'
      },
      {
        name: 'lastname',
        icon: 'fa-user',
        placeholder: 'Enter last name',
        required: true,
        type: 'text'
      },
      {
        name: 'phone',
        icon: 'fa-phone',
        placeholder: 'Enter phone number',
        required: true,
        type: 'text'
      },
      {
        name: 'email',
        icon: 'fa-at',
        placeholder: 'Enter email',
        required: true,
        type: 'text'
      },
      {
        name: 'confimemail',
        icon: 'fa-at',
        placeholder: 'Confirm email',
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
        name: 'confrimpassword',
        icon: 'fa-key',
        placeholder: 'Confirm password',
        required: true,
        type: 'password'
      },
      {
        name: 'register',
        icon: 'fa-user-plus',
        label: 'Register',
        type: 'button'
      }
    ];
  }

  ngOnInit() {
  }

  submit(event: Event): void {
    // email, confirmemail
    // password, confirmpassword
    // firstname, lastname
    // phone
    this.authenticationService.register(
      event['email'],
      event['password'],
      event['firstname'] + ' ' + event['lastname'],
      event['phone']
    );
  }

}
