import * as YUP from "yup";

const validation = YUP.object().shape({
    name: YUP
        .string()
        .min(3, "Min lenght 3")
        .max(20, "Max lenght 20")
        .required("Name is required !")
        .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
    lastname: YUP
        .string()
        .min(5, "Min lenght 5")
        .max(20, "Max lenght 20")
        .required("Lastname is required !")
        .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
    email: YUP
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@/, "Invalid characters before @")
        .matches(/@/, "Email must contain @ symbol")
        .matches(/@[a-zA-Z0-9.-]+$/, "Invalid domain") 
        .matches(/\.[a-zA-Z]{2,4}$/, "Domain must end with a valid extension (com, net)")
        .required("Email is required !"),
    phone: YUP
        .string()
        .matches(/^\d+$/, "Only numbers allowed")
        .required("Phone is required !"),
    payment: YUP
        .string()
        .required("Select a payment method"),
});

export default validation