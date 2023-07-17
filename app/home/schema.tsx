import * as Yup from 'yup';

export const contactUsSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your first name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
    phoneNumber: Yup.number().required('Please enter your phone Number'),
    message: Yup.string().min(6).max(225).required('Please enter a message')
})