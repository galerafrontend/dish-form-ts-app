import { useFormik } from "formik";
import { Form, Button } from "./styled";
import { filterValues, postDish } from "../../helpers/apiUtil";
import { dishValidationSchema } from "./dishValidationSchema";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { useState } from "react";
import Notification from "../Notification";
import useStatus from "./useStatus";
import getNotificationData from "./getNotificationData";

const DishForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      preparation_time: "",
      type: "",
      no_of_slices: "",
      diameter: "",
      spiciness_scale: "",
      slices_of_bread: "",
    },
    validationSchema: dishValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      setStatus("pending");
      try {
        const filteredValues = filterValues(values);

        const response = await postDish(filteredValues);

        if (!response) {
          throw new Error("Cannot connect to API");
        }

        if (response.ok) {
          await response.json();
          resetForm();
          setStatus("success");
          setSubmitting(false);
        } else {
          const errorData = await response.json();
          setErrors(errorData);
        }
      } catch (error) {
        setStatus("error");
        console.error("An error occurred:", error);
      }
    },
  });

  useStatus(status, setStatus);
  const notification = getNotificationData(status);

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TextInput
          label="Dish name*:"
          name="name"
          type="text"
          formik={formik}
        />

        <TextInput
          label="Preparation time*:"
          name="preparation_time"
          type="text"
          placeholder="HH:MM:SS"
          formik={formik}
        />

        <SelectInput
          label="Type of dish*:"
          name="type"
          options={[
            { value: "", text: "" },
            { value: "pizza", text: "Pizza" },
            { value: "soup", text: "Soup" },
            { value: "sandwich", text: "Sandwich" },
          ]}
          formik={formik}
        />

        {formik.values.type === "pizza" && (
          <>
            <TextInput
              label="Number of slices*:"
              name="no_of_slices"
              type="number"
              formik={formik}
            />

            <TextInput
              label="Diameter*:"
              name="diameter"
              type="number"
              step="0.01"
              formik={formik}
            />
          </>
        )}
        {formik.values.type === "soup" && (
          <TextInput
            label="Spiciness scale (1-10)*:"
            name="spiciness_scale"
            type="number"
            formik={formik}
          />
        )}
        {formik.values.type === "sandwich" && (
          <TextInput
            label="Slices of bread*:"
            name="slices_of_bread"
            type="number"
            formik={formik}
          />
        )}
        <Button type="submit">Submit</Button>
      </Form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
};

export default DishForm;
