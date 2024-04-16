import * as Yup from "yup";

export const Login_validate = Yup.object().shape({
  Name: Yup.string()
    .required("Username is required")
    .min(3, "username must be at least 3 characters long")
    .max(20, "username must not exceed 20 characters"),

  email: Yup.string()
    .trim()
    .email("Please enter valid email")
    .required("Email Address is Required"),
});
