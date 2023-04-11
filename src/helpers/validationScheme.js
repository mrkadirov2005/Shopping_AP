import * as yup from "yup";

const phoneRegex = /(998)?(99|91|90|97|88|66|33|93|94|98)[0-9]{7}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
export const loginScheme = yup.object().shape({
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegex, "Bu noto'g'ri raqam"),
  password: yup
    .string()
    .required()
    .matches(passwordRegex, "Bu noto'g'ri parol"),
});

export const registerScheme = yup.object().shape({
  username: yup.string().required("").min(6),
  phoneNumber: yup.string().required().matches(phoneRegex, "Raqam xato"),
  password: yup.string().required().matches(passwordRegex, "Parol xato"),
  consfirmPassword: yup.string().required(),
});
