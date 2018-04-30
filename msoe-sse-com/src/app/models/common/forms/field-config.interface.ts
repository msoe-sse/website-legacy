import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  action?: string;
  disabled?: boolean;
  icon?: string;
  label?: string;
  max?: number;
  min?: number;
  name: string;
  options?: {};
  placeholder?: string;
  required?: boolean;
  step?: number;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
}
