import * as Yup from "yup";

export interface FromValues {
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
}

export const userProfileSchema = Yup.object().shape({
  name: Yup.string().required("Нэрээ оруулна уу *"),
  phoneNumber: Yup.string()
    .nullable()
    .matches(/^[0-9]+$/, "Утасны дугаар тоо байх ёстой")
    .min(8, "Утасны дугаар 8 оронтой тоо байх ёстой")
    .max(8, "Утасны дугаар 8 оронтой тоо байх ёстой")
    .required("Утасны дугаараа оруулна уу *"),
  email: Yup.string()
    .nullable()
    .email("И-мэйл хаяг бичнэ уу")
    .required("И-мэйл хаягаа оруулна уу *"),
});
