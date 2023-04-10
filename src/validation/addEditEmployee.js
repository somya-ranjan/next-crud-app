import * as Yup from "yup";
export const addEditEmployeeValidation = Yup.object({
  fullName: Yup.string()
    .min(4, "Name must be minimum 4 character")
    .required("This field is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  address: Yup.string()
    .min(12, "Please add more about your address")
    .required("This field is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("This field is required"),
});
