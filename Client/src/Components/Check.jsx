import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, clearData } from './Features/dataSlice.js';

function Check() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData('http://localhost:8000/api/user/login'));

    // Optional cleanup on unmount
    return () => {
      dispatch(clearData());
    };
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data</p>}
    </div>
  );
}

export default Check;
