import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const apiEndpoint = 'https://localhost:5000/search'; // Use a secure protocol

const fetchSearchResults = async (params) => {
  try {
    const response = await fetch(`${apiEndpoint}?${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = new URLSearchParams(useLocation().search);
  const city = query.get('city');
  const propertyType = query.get('propertyType');
  const priceRange = query.get('priceRange');

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams({ city, propertyType, priceRange }).toString();
      try {
        const data = await fetchSearchResults(params);
        if (data.status === 'success') {
          setSearchResults(data.items);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('An error occurred while fetching search results.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, propertyType, priceRange]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Search Results for "{city || 'all cities'}" with {propertyType || 'any type'} and price range {priceRange || 'any'}</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((item) => (
            <li key={item._id}>
              <img src={item.Image} alt={item.Name} width="100" />
              <p>{item.Name}</p>
              <p>Price: {item.Price}</p>
              <p>Offer: {item.offer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default SearchResults;
