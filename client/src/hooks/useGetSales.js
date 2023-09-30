import { getSales } from '@/api/sale';
import { useState, useEffect } from 'react';

function useGetSales() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSales().then((res) => {
      setData(res);
    });
  }, []);

  return data;
}

export default useGetSales;
