import { Error } from "../Error/styled";
import { Label, Select } from "./styled";
import { InputFields } from "../../../types/input.types";

const SelectInput = ({ label, name, options, formik }: InputFields) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {!options ? "" : options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      {formik.touched[name] && formik.errors[name] && (
        <Error>{formik.errors[name]}</Error>
      )}
    </>
  );
};

export default SelectInput;
