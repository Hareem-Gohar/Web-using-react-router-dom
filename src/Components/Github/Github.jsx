import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/hareem-gohar')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading data, please wait...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error.message}</div>;
  }

  if (!data) {
    return <div className="text-center text-gray-600">Data not found</div>;
  }

  return (
    <div className="text-center p-4 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">GitHub Profile</h1>
      <p className="text-lg">Name: <span className="font-semibold">{data.login}</span></p>
      <p className="text-lg">Github Followers: <span className="font-semibold">{data.followers}</span></p>
    </div>
  );
};

export default Github;
