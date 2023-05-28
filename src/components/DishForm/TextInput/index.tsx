import { Input, Label } from "./styled";
import { Error } from "../Error/styled";
import { InputFields } from "../../../types/input.types";

const TextInput = ({
  label,
  name,
  formik,
  placeholder,
  step,
  type,
}: InputFields) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        step={step}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      {formik.touched[name] && formik.errors[name] && (
        <Error>{formik.errors[name]}</Error>
      )}
    </>
  );
};

export default TextInput;
