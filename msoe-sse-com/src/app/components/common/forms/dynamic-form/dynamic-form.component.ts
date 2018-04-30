import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FieldConfig } from '../../../../models/common/forms/field-config.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sse-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Output() public changed: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submitted: EventEmitter<any> = new EventEmitter<any>();
  @Input() public config: FieldConfig[] = [];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
    this.form.valueChanges.subscribe((data: any) => {
      this.changed.emit(data);
    });
  }

  public submit(): void {
    this.submitted.emit(this.form.value);
  }

  private createGroup(): FormGroup {
    const group: FormGroup = this.formBuilder.group({});
    this.config.forEach(
      (control: any) => group.addControl(control.name, this.formBuilder.control(null))
    );
    return group;
  }

}
