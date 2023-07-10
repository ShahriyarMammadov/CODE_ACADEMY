import * as Yup from "yup";

export const customerValidationSchema = Yup.object().shape({
    name: Yup.string("")
        .required("this field can not be empty")
        .min(10, "min 10 character is required"),

    phone: Yup.string("should enter number")
        .required("this field can not be empty")
        .min(10, "At least 10 char shpuld enter")
        .max(15, "max 15 char should enter"),

    website: Yup.string().max(16, "max 30"),
    message: Yup.string().max(16, "max 80"),
    email: Yup.string().email('Invalid email').required('Required'),
});
