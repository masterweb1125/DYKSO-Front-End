import * as Yup from "yup";

export const SignUp_validate = Yup.object().shape({
  Name: Yup.string()
    .required("Username is required")
    .min(3, "username must be at least 3 characters long")
    .max(20, "username must not exceed 20 characters"),

  email: Yup.string()
    .trim()
    .email("Please enter valid email")
    .required("Email Address is Required"),

  confirmEmail: Yup.string()
  .required("Confirm email is Required")
  .oneOf([Yup.ref("email")], "Password does not match"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 12 characters"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password does not match"),

});
