import SalesList from "@/containers/sales";
import useGetSales from "@/hooks/useGetSales";

const SalesListing = () => {
  const sales = useGetSales();


  return (
    <>
      <SalesList sales={sales} />
    </>
  );
};

export default SalesListing;
