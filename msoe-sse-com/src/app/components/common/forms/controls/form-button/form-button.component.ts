import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../../../../models/common/forms/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../../models/common/forms/field.interface';

@Component({
  selector: 'sse-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements Field {
  public config: FieldConfig;
  public group: FormGroup;
}
