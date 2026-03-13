import { useEffect, useState } from "react";


const useFetch = <T>(fetchFn: ()=>Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try{
      // Set loading indicator to let user know fetch attempt has begun.
      setLoading(true);

      // Reset our error state if no error was caught.
      setError(null);

      // Await the result of our fetchFn we passed in to our hook and assign it's value to our data state.
      const result = await fetchFn();
      setData(result);

    } catch (err) {
      // @ts-ignore
      setError(err instanceof Error ? err : new Error("An error occured"));
    } finally {
      // Always reset our loading state when try or catch complete.
      setLoading(false);
    }
  }

  // Reset fn for useEffect
  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  }

  useEffect(()=> {
    if(autoFetch) {
      fetchData();
    }
  }, []);

  return {data, loading, error, refetch: fetchData, reset}

} 