import * as Yup from 'yup'
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

 export const signupSchema=Yup.object({
    name:Yup.string().min(2).max(20).required('please enter name'),
    email:Yup.string().email().required('please enter email').matches(gmailRegex,'invalid gmail'),
    password:Yup.string().min(8).required('please enter password').matches(
      passwordRegex,
      "Must Contain 8 Characters,One Uppercase,One Lowercase,One Number and one special Character"
    ),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],'password should same')
 });