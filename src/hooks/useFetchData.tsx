import { useState, useEffect } from 'react';

function useFetchData(url: string) {
  const [list, setList] = useState<any>(null);
  const getData = () =>
    fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);

  useEffect(() => {
    getData().then(data => setList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return list;
}
export default useFetchData;
