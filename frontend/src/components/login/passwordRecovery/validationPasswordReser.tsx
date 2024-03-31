import * as Yup from "yup";

export interface FromValues {
  email: string | null;
}

export const passwordResetScheme = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("И-мэйл хаяг байх ёстой")
    .required("И-мэйл хаягаа оруулна уу *"),
});
