import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../../../../models/common/forms/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../../models/common/forms/field.interface';

@Component({
  selector: 'sse-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements Field {
  public config: FieldConfig;
  public group: FormGroup;
}
