import { useState } from "react";

const useAuthForm = (initialValues, validationSchema, submitCallback) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const handleReset = () => {
      setValues(initialValues);
      setErrors({});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await submitCallback(values);
      } catch (err) {
        console.error(err);
      }
  
      setIsSubmitting(false);
    };
  
    return {
      values,
      errors,
      isSubmitting,
      handleChange,
      handleReset,
      handleSubmit,
    };
  };
  
  export default useAuthForm;
  