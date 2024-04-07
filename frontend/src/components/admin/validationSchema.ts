import * as Yup from "yup";

export type  TFromValues = {
  id: string;
 name: string;
  category: string;
  ingredients: string;
  price: number;
  isDiscount: boolean;
  discountRate: number;
  image:  string;
}

export const createFoodSchema = Yup.object().shape({
  name: Yup.string().required("Food name is required"),
  category: Yup.string().required("Food category is required"),
  ingredients: Yup.string().required("Food ingredients are required"),
  //   foodPrice: Yup.number()
  //     .nullable()
  //     .required("Food price is required")
  //     .positive("Price must be a positive number"),
  price: Yup.number().nullable(),
  isDiscount: Yup.boolean(),
  discountRate: Yup.number().nullable(),
image: Yup.mixed().nullable(),
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
