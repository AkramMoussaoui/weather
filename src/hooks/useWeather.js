import { useState, useEffect } from "react";

const useWeather = (action, click) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const actionData = await action();
        setData(actionData.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [click]);

  return [data, loading, error];
};

export default useWeather;
