import { confirmRegistration } from '@/api/auth/index.js';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';


const RegistrationConfirmation = () => {
    const { token } = useParams();
    console.log(token)

  const navigate = useNavigate()

  useEffect(() => {
    const confirmRegistrationAsync = async () => {
      try {
        const response = await confirmRegistration({ token });
        if (response?.token) {
          console.log(response)
          localStorage.setItem('token', response?.token);
          localStorage.setItem("user", JSON.stringify(response?.user));

          console.log(response.message)
          navigate("/")
        }
      } catch (error) {
        toast(error.message)
      }
    };

    confirmRegistrationAsync();
  });

  return (
    <div>
      <h2>Registration Confirmation</h2>
    </div>
  );
};

export default RegistrationConfirmation;
