import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

/* 
    useFetch<T = unknown>(url: string, options?: AxiosRequestConfig): FetchState<T> 
    o que faz <T = unknown> ? define a classe que vai ser usada dentro da função
    o que faz FetchState<T> ? define o retorno da função
*/
function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url, options);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;
