import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

/**
 * useFetch é um hook personalizado para realizar uma chamada HTTP e retornar os dados, 
 * o estado de carregamento e qualquer erro que possa ocorrer.
 *
 * @param url A URL para a qual a chamada HTTP deve ser feita.
 * @param options Opções opcionais para a chamada HTTP (ex: método, cabeçalhos, etc.).
 * @returns Um objeto com três propriedades:
 *  - data: os dados retornados pela chamada HTTP. O tipo de dados é definido por T.
 *  - loading: um booleano que indica se a chamada HTTP ainda está em progresso.
 *  - error: um erro que ocorreu durante a chamada HTTP, se houver.
 *
 * O tipo genérico T é usado para definir o formato esperado dos dados de resposta. 
 * Se nenhum tipo é especificado, ele é considerado 'unknown' por padrão.
 *
 * Exemplo de uso:
 * const { data, loading, error } = useFetch<UserData>('https://api.example.com/user');
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
