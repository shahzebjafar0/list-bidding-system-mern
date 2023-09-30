import { addListing } from "@/api/listing";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import ListingForm from "@/components/listing/ListingForm";

const AddListing = () => {
  const navigate = useNavigate();

  const handleAddListing = async (formData) => {
    try {
      const res = await addListing(formData);
      console.log(res);

      // Show a success toast
      toast.success("Listing added successfully");

      // Navigate to the newly created listing
      navigate(`/view-listing/${res.item._id}`);
    } catch (error) {
      // Show an error toast if the request fails
      toast.error("Failed to add listing. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <ListingForm onSubmit={handleAddListing} />
    </>
  );
};

export default AddListing;
