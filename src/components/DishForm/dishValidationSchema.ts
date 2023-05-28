import * as Yup from "yup";

export const dishValidationSchema = Yup.object({
  name: Yup.string().required("Field is required"),
  preparation_time: Yup.string()
    .matches(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid format. Please use HH:MM:SS"
    )
    .required("Field is required"),
  type: Yup.string().required("Field is required"),
  no_of_slices: Yup.string().when("type", {
    is: "pizza",
    then: () =>
      Yup.number()
        .min(2, "It should be at least 2 slices")
        .max(10, "It could be a max of 10 slices")
        .required("Field is required"),
  }),
  diameter: Yup.string().when("type", {
    is: "pizza",
    then: () =>
      Yup.number()
        .min(20.0, "It should be at least 20.00")
        .max(60.0, "It could be max of 60.00")
        .required("Field is required"),
  }),
  spiciness_scale: Yup.string().when("type", {
    is: "soup",
    then: () =>
      Yup.number()
        .min(1, "Scale should at least 1")
        .max(10, "Scale could be a max of 10")
        .required("Field is required"),
  }),
  slices_of_bread: Yup.string().when("type", {
    is: "sandwich",
    then: () =>
      Yup.number()
        .min(1, "It should be at least 1 slice")
        .max(10, "It could be max of 10 slices")
        .required("Field is required"),
  }),
});
