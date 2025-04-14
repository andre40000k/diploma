import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
    password:yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
})

export const registerSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  name: yup.string(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "Passwords do not compare")
  //   .required("Confirm password"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type RegisterFormData = yup.InferType<typeof registerSchema>;