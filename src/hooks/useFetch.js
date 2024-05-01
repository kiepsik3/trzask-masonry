import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
