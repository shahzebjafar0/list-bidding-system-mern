import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().trim().required('Email is required').min(1, 'Email cannot be empty'),
  password: Yup.string().trim().required('Password is required').min(1, 'Password cannot be empty'),
});

export const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required').min(1, 'Name cannot be empty'),
  email: Yup.string().trim().required('Email is required').min(1, 'Email cannot be empty'),
  password: Yup.string().trim().required('Password is required').min(1, 'Password cannot be empty'),
});

