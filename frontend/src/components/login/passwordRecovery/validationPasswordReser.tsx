import * as Yup from "yup";

export interface FromValues {
  email: string;
}

export const passwordResetScheme = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("И-мэйл хаяг байх ёстой")
    .required("И-мэйл хаягаа оруулна уу *"),

});

export interface FromValues2 {
  newPassword: string;
  rePassword: string;
}

export const passwordResetScheme2 = Yup.object().shape({
  newPassword: Yup.string()
    .nullable()
    .min(8, "Нууц үг заавал 8 оронтой байх ёстой")
    .required("Нууц үгээ оруулна уу *"),
  rePassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("newPassword"), null], "Нууц үгээ тааруулна уу"),

});