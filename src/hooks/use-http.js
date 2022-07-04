import React, { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (config, transformData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) throw new Error('Request Error!');

      const data = await response.json();
      transformData(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
