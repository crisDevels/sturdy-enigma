import { useEffect, useState } from "react";
import { useAxios } from "./useAxios"

export const useGetFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [axios] = useAxios();

  async function fetchData () {
    try {
      const request = await axios.get(url);
      setData(request.data);
      setLoading(false);
      await console.log(request.data);
    } catch(err) {
      setLoading(false);
      setError(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { loading, error, data }
}