import { Data } from "../types/helper.types";

export const postDish = async (values: Data) => {
  try {
    const response = await fetch(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error(error);
    }
  }
};

export const filterValues = (values: Data): Data => {
  const filteredData = Object.fromEntries(
    Object.entries(values).filter(([_, v]) => v !== "")
  ) as Data;

  return filteredData;
};
