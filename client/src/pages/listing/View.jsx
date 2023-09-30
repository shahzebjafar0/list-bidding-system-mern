import ListingList from "@/containers/listing";
import useGetListing from "@/hooks/useGetListing";
import { useNavigate } from "react-router-dom";

const ViewListing = () => {
  const listings = useGetListing();
  const navigate = useNavigate()
  const handleViewListing = (listingId) => {
    navigate(`/list-bid/${listingId}`)
  };

  return (
    <>
      <ListingList
        listings={listings}
        handleViewListing={handleViewListing}

      />
    </>
  );
};

export default ViewListing;
