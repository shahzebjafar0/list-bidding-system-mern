import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BidForm = ({ onPlaceBid }) => {
  const formik = useFormik({
    initialValues: {
      price: '',
    },
    validationSchema: Yup.object({
      price: Yup.number()
        .min(1, 'Bid amount must be at least 1')
        .required('Bid amount is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onPlaceBid(values.price);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-xs my-5 mx-auto">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className={`appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none ${
            formik.touched.price && formik.errors.price
              ? 'border-red-500'
              : 'border-teal-500'
          }`}
          type="text"
          placeholder="Enter bid amount"
          id="price"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Place Bid
        </button>
      </div>
      {formik.touched.price && formik.errors.price ? (
        <div className="text-red-500 text-sm mt-2">{formik.errors.price}</div>
      ) : null}
    </form>
  );
};

export default BidForm;
