import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be more than 8 characters')
    .required('Required'),
  company: Yup.string(),
  yearsOfExperience: Yup.string(),
  title: Yup.string(),
});
