import { updateListing } from "@/api/listing";
import ListingForm from "@/components/listing/ListingForm"
import { useParams } from "react-router-dom";

const UpdateListing = () => {
    const { listingId } = useParams();
    const handleUpdateListing = async (formData,id) => {
        const res = await updateListing(formData,id)
        console.log(res)
      };
    return (
    
    <ListingForm onSubmit={handleUpdateListing} id={listingId}/>
  )
}

export default UpdateListing