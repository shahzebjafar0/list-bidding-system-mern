
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { login } from '@/api/auth/index.js';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const SignIn = () => {
  const navigate=useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await login(values);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      toast.success('Sign-in successful!');
      navigate('/')
    } catch (err) {
      toast.error("Invalid Username of Password");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">Sign In</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
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
              <div className="mt-6">
                <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}>
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-4">
          <p>
            Do not have an account?{' '}
            <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
