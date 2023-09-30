import { useState, useEffect } from "react";
import BidForm from "@/components/bid/BidForm";
import BidList from "@/containers/bid";
import { getBid, placeBid, acceptBid } from "@/api/bid";
import ShowList from "@/components/listing/ShowList";
import { useNavigate, useParams } from "react-router-dom";
import { deleteListing } from "@/api/listing";
const ShowBidding = () => {
  const { listingId } = useParams();
  const [listing, setListing] = useState([]);
  const [bid, setBid] = useState([]);
  const [addedBid, setAddedBid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (listingId) {
      const fetch = async () => {
        const res = await getBid(listingId);
        console.log("res of getting bid", res);
        setListing(res?.listing);
        setBid(res?.bid);
      };
      fetch();
    }
  }, [listingId, addedBid]);

  const handleUpdateListing = (listingId) => {
    navigate(`/view-listing/${listingId}`);
  };

  const handleDeleteListing = async (listingId) => {
    const res = await deleteListing(listingId);
    console.log(res);
  };

  const handlePlaceBid = async (price) => {
    const res = await placeBid({ amount: price, listing: listingId });
    console.log("after add bid", res);
    setAddedBid(true);
  };
  const handleAcceptBid = async (id) => {
    await acceptBid({ accepted: true }, id);
  };
  return (
    <div className="container mx-auto p-4">
      {listing && (
        <ShowList
          isSingle={true}
          id={listing._id}
          title={listing.title}
          description={listing.description}
          price={listing.price}
          seller={listing.seller}
          image={listing.image}
          isNew={true}
          onUpdate={handleUpdateListing}
          onDelete={handleDeleteListing}
        />
      )}
      <h2 className="text-center text-xl font-bold my-5  ">Bids</h2>
      {listing?.seller?._id ==
      JSON.parse(localStorage.getItem("user"))?.id ? null : (
        <BidForm onPlaceBid={handlePlaceBid} />
      )}
      {bid && (
        <BidList
          bids={bid}
          seller={listing ? listing.seller : null}
          handleAcceptBid={handleAcceptBid}
        />
      )}
    </div>
  );
};

export default ShowBidding;
