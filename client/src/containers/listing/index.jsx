
import ShowList from "@/components/listing/ShowList";

const ListingList = ({ listings , handleViewListing}) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto"> {/* Use grid layout for responsiveness */}
      {listings.map((listing, index) => (
        <div
          key={listing._id}
          onClick={() => handleViewListing(listing._id)}
          className="cursor-pointer"
        >
          <ShowList
            id={listing._id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            seller={listing.seller}
            image={listing.image}
            isNew ={true}
            key={index}

          />
        </div>


      ))}
    </div>
  );
};

export default ListingList;
