import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import api from 'services';
import { useAuth } from 'contexts/auth';

type UseFetchProps<T> = {
  url: string;
  isPrivate?: boolean;
  config?: AxiosRequestConfig<T>;
};

const useFetch = <T extends any>({
  url,
  config,
  isPrivate,
}: UseFetchProps<T>) => {
  const { isAuthenticated } = useAuth();

  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    if (isPrivate && !isAuthenticated) return;

    setLoading(true);
    try {
      const r = await api(url, config);

      const { data } = r;

      setResponse(data);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [config, isAuthenticated, isPrivate, url]);

  useEffect(() => {
    if (config) return;

    fetchData();
  }, [config, fetchData]);

  return { response, loading, error, fetchData };
};

export default useFetch;
