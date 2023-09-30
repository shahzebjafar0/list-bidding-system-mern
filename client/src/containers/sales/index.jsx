import ShowList from "@/components/listing/ShowList";

const SalesList = ({ sales }) => {
    console.log(sales)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
      {" "}
      {/* Use grid layout for responsiveness */}
      {sales.map((sale, index) => (
        <div key={sale.listing?._id}>
          <ShowList
            id={sale.listing?._id}
            title={sale.listing?.title}
            description={sale.listing?.description}
            price={sale.listing?.price}
            image={sale.listing?.image}
            key={index}
          />
            <div> SOLD IN : {sale.price} to : {sale.buyer?.fullName}</div>
        </div>
      ))}
    </div>
  );
};

export default SalesList;
