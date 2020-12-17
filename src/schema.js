// Here goes the schema for the form
import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(3, 'please enter your full name'),
    email: yup
    .string()
    .email()
    .required('must be a valid email address'),
    password: yup
    .string()
    .required('please enter a password'),
    terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions"),
})

// const formSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email("Must be a valid email address.")
//       .required("Must include email address."),
//     password: Yup
//       .string()
//       .required("Password is Required")
//       .min(6, "Passwords must be at least 6 characters long."),
//     terms: Yup
//       .boolean()
//       .oneOf([true], "You must accept Terms and Conditions")
//       // required isn't required for checkboxes.
//   });