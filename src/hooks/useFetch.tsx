import { AxiosRequestConfig } from 'axios';
import { useEffect, useReducer } from 'react';
import api from 'services';

enum ActionType {
  loading = 'loading',
  fetched = 'fetched',
  error = 'error',
}

interface State<T> {
  data?: T;
  error?: Error;
  type: ActionType;
}

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

function useFetch<T = unknown>(
  url?: string,
  options?: AxiosRequestConfig<T>,
): State<T> {
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    type: ActionType.loading,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, type: ActionType.loading };
      case 'fetched':
        return {
          ...initialState,
          data: action.payload,
          type: ActionType.fetched,
        };
      case 'error':
        return {
          ...initialState,
          error: action.payload,
          type: ActionType.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await api(url, options);

        const { data } = response;

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        dispatch({ type: 'error', payload: error as Error });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
