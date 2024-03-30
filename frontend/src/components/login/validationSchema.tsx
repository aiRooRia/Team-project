import * as Yup from "yup";

export interface FromValues {
  email: string | null;
  password: string | null;
}

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("И-мэйл хаяг бичнэ уу")
    .required("И-мэйл хаягаа оруулна уу *"),
  password: Yup.string()
    .nullable()
    .min(8, "Нууц үг заавал 8 оронтой байх ёстой")
    .required("Нууц үгээ оруулна уу *"),
});
