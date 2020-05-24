import { useContext, useEffect, useState } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import { GlobalContext } from '../Contexts/GlobalContext';
import API from '../Utilities/API';

export default function useApi(apiFunction, params) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFunction(params)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.data);
        setIsLoading(false);
      });
  }, [apiFunction, params]);

  return [isLoading, data, error];
}
