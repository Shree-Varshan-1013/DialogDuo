import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    username:Yup.string().required("Please Enter the Username !"),
    email:Yup.string().email().required("Please Enter the Email !"),
    password:Yup.string().min(6).max(15).required("Please Enter the Password !"),
    confirmpassword:Yup.string().oneOf([Yup.ref("password"),null],"Password must match").required("Please Enter the Confirm Password !"),
});