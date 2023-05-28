export interface FormData {
  initialValues: Data;
}

export interface Data {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: string;
  diameter?: string;
  spiciness_scale?: string;
  slices_of_bread?: string;
}
