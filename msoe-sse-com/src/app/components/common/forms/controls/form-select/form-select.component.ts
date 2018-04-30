import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../../models/common/forms/field-config.interface';
import { Field } from '../../../../../models/common/forms/field.interface';

@Component({
  selector: 'sse-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements Field {
  public config: FieldConfig;
  public group: FormGroup;
}
