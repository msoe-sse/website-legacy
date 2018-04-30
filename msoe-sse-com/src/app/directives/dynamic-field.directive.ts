import {
  Directive,
  ComponentRef,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit,
  OnChanges,
  Component,
  ComponentFactory
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../models/common/forms/field-config.interface';
import { Field } from '../models/common/forms/field.interface';
import { FormButtonComponent } from '../components/common/forms/controls/form-button/form-button.component';
import { FormInputComponent } from '../components/common/forms/controls/form-input/form-input.component';
import { FormSelectComponent } from '../components/common/forms/controls/form-select/form-select.component';

const components = {
  button: FormButtonComponent,
  text: FormInputComponent,
  password: FormInputComponent,
  number: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[sseDynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnChanges, Field {

  public component: ComponentRef<any>;
  @Input() public config: FieldConfig;
  @Input() public group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  public ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  public ngOnInit(): void {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error('Trying to use an unsupported type (${this.config.type}). Supported types are ${supportedTypes}.');
    }
    const component: ComponentFactory<any> = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
