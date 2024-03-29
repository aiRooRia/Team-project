import * as Yup from "yup";

interface FromValues {
  email: string | null;
  password: string | null;
}

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("Invalid email")
    .required("Email is required *"),
  password: Yup.string().nullable().required("Password is required *"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required *"),
  email: Yup.string()
    .nullable()
    .email("Invalid email")
    .required("Email is required *"),
  password: Yup.string()
    .nullable()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required *"),
  rePassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const amountSchema = Yup.object().shape({
  amount: Yup.number()
    .nullable()
    .typeError("Amount must be a number")
    .required("Amount is required *"),
});
