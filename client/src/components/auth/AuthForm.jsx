
import useAuthForm from "@/hooks/useAuthForm";

const AuthForm = ({
  initialValues,
  validationSchema,
  submitCallback,
  buttonText,
}) => {
  const { values, handleReset, errors, isSubmitting, handleChange, handleSubmit } =
    useAuthForm(initialValues, validationSchema, submitCallback);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
    } catch (err) {
      console.log(err)

    }
  };

  return (
    <>

      <form onSubmit={handleFormSubmit}>
        {Object.keys(initialValues).map((fieldName) => (

          <div key={fieldName} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" >
              {fieldName}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type={fieldName.includes("password") ? "password" : "text"}
              name={fieldName}
              value={values[fieldName]}
              onChange={handleChange}
              placeholder={
                fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
              }
            />
            <p>{errors[fieldName]}</p>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
            {buttonText}
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="buttom" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
