import * as Yup from "yup";

export interface FromValues {
  foodName: string;
  foodCategory: string;
  foodIngredients: string;
  foodPrice: number;
  isDiscount: boolean;
  discountRate: number | null | string;
  foodImage: File | null | string;
}

export const createFoodSchema = Yup.object().shape({
  foodName: Yup.string().required("Food name is required"),
  foodCategory: Yup.string().required("Food category is required"),
  foodIngredients: Yup.string().required("Food ingredients are required"),
  //   foodPrice: Yup.number()
  //     .nullable()
  //     .required("Food price is required")
  //     .positive("Price must be a positive number"),
  foodPrice: Yup.number().nullable(),
  isDiscount: Yup.boolean(),
  discountRate: Yup.number().nullable(),
  foodImage: Yup.mixed().nullable(),
  //    .test('fileSize', 'File size must be less than 2MB', value => {
  //      if (value) {
  //        return value.size <= 2 * 1024 * 1024; // 2MB
  //      }
  //      return true;
  //    }),

  //     .test("fileType", "Unsupported File Format", (value) => {
  //       // Check if a file is provided
  //       if (!value) return true; // Return true if no file is provided

  //       // Define allowed image types
  //       const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

  //       // Check if the file type is allowed
  //       return allowedImageTypes.includes(value.type);
  //     }),
});

// export const signUpSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required *"),
//   email: Yup.string().email("Invalid email").required("Email is required *"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required *"),
//   rePassword: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     "Passwords must match"
//   ),
// });
// export const amountSchema = Yup.object().shape({
//   amount: Yup.number()
//     .typeError("Amount must be a number")
//     .required("Amount is required *"),
// });
