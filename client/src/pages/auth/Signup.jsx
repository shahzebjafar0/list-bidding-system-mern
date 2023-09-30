
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { signUp } from '@/api/auth/index.js';
import { Link } from 'react-router-dom';

const SignUp = () => {


  const initialValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values) => {
    try {
      await signUp(values);
      toast.success('Sign-up successful!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">Sign Up</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-gray-600">Username</label>
              <Field type="text" id="userName" name="userName" className="form-input border border-blue-300 rounded-md p-2" />
              <ErrorMessage name="userName" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <Field type="email" id="email" name="email" className="form-input border border-blue-300 rounded-md p-2" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <Field type="password" id="password" name="password" className="form-input border border-blue-300 rounded-md p-2" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="form-input border border-blue-300 rounded-md p-2" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mt-6">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
        <div className="text-center mt-4">
          <p>
            Already have an account?{' '}
            <Link to="/sign-in" className="text-blue-500 hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
