import { getSpecificListing } from "@/api/listing";
import { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadImage } from "@/utils/Couldinary";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
});

const ListingForm = ({ onSubmit, id }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const initialValues = {
    title: "",
    description: "",
    price: "",
    image: "",
    active: true,
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        const res = await getSpecificListing(id);
        initialValues.title = res.title;
        initialValues.description = res.description;
        initialValues.price = res.price;
        initialValues.image = res.image;
      };
      fetch();
    }
  }, [id]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    var picture = values?.image;
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESIST);
      const res = await uploadImage(formData);
      picture = res?.url;
    }
    values.image = picture;
    onSubmit(values, id);
    setSubmitting(false);
    navigate(`/list-bid/${id}`);
    toast.success("Listing updated successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">
          {id ? "Update Listing" : "Add Listing"}
        </h2>
        <input type="file" onChange={handleImageChange} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="border border-gray-300 p-2 rounded-md">
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-full border-none focus:outline-none"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="border border-gray-300 p-2 rounded-md">
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="w-full h-32 border-none focus:outline-none"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="border border-gray-300 p-2 rounded-md">
                <Field
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="w-full border-none focus:outline-none"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300 focus:outline-none"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ListingForm;
