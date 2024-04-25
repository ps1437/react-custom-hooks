import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';

function FetchComponent() {
  const [id, setId] = useState('');
  const { loading, error, data } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>TODO </p>
      <hr />
      <input type="text" value={id} onChange={handleChange} placeholder="Enter Todo ID" />
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default FetchComponent;
