import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  image: Yup.string()
    .min(2, "Qisadir!")
    .max(500, "Uzundur!")
    .required("Tam Doldurun!!"),
  headerText: Yup.string()
    .min(15, "Qisadir!")
    .max(150, "Uzundur!")
    .required("Tam Doldurun!!"),
  aboutText: Yup.string()
    .min(20, "Qisadir!")
    .max(150, "Uzundur!")
    .required("Tam Doldurun!!"),
  price: Yup.string()
    .min(2, "Qisadir!")
    .max(50000, "Uzundur!")
    .required("Tam Doldurun!!"),
});

export default SignupSchema;
