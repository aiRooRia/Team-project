import * as Yup from "yup";

export interface FromValues {
  name: string | null;
  location: string | null;
  email: string | null;
  password: string | null;
  rePassword: string | null;
}

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Нэрээ оруулна уу *"),
  location: Yup.string().required("Хаягаа оруулна уу *"),
  email: Yup.string()
    .nullable()
    .email("И-мэйл хаяг байх ёстой")
    .required("И-мэйл хаягаа оруулна уу *"),
  password: Yup.string()
    .nullable()
    .min(8, "Нууц үг заавал 8 оронтой байх ёстой")
    .required("Нууц үгээ оруулна уу *"),
  rePassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password"), null], "Нууц үгээ тааруулна уу"),
});
