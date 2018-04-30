import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../../../models/common/forms/field-config.interface';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'sse-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

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
        name: 'forgotpassword',
        label: 'Forgot Password',
        type: 'button'
      }
    ];
  }

  ngOnInit() {
  }

  submit(event: Event): void {
    // email
    this.authenticationService.forgotPassword(event['email']);
  }

}
