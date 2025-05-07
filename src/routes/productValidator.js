import yup from "yup";

export default yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, "Too short (name)")
      .max(100, "Too long (name)")
      .required("Required (name)"),
    description: yup
      .string()
      .max(1000, "Too long (description)")
      .required("Required (description)"),
    price: yup
      .number()
      .min(0, "Price must be >= 0")
      .required("Required (price)"),
    category: yup
      .string()
      .required("Required (category)"),
    brand: yup
      .string()
      .optional(),
  });
