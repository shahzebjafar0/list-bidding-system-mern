import { getListing } from '@/api/listing';
import { useState, useEffect } from 'react';

function useGetListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getListing().then((res) => {
      console.log(res.data)
      setData(res);
    });
  }, []);

  return data;
}

export default useGetListing;
