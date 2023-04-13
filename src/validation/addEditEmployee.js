import * as Yup from "yup";
export const addEditEmployeeValidation = Yup.object({
  name: Yup.string()
    .min(4, "Name must be minimum 4 character")
    .required("This field is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("This field is required"),
  designation: Yup.string()
    .min(6, "Please add more about your role")
    .required("This field is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    // .matches(
    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //   "Invalid phone number"
    // )
    .required("This field is required"),
});
