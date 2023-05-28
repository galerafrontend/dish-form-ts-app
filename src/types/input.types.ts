export interface InputFields {
  label: string;
  name: string;
  options?: OptionsArray[];
  formik: Record<any, any>;
  placeholder?: string;
  step?: string;
  type?: string;
}

export interface OptionsArray {
  value: string;
  text: string;
}