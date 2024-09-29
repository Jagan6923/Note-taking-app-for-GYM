import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const category = 'fitness';
    const apiKey = 'PmnjG8o1l3F9ebhiqcypOQ==Wfz3XrGGjryRgMQF'; // Replace with your actual API key

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the response in the console
        if (data && data.length > 0) {
          setQuote(data[0].quote); // Set the first quote from the API response
        }
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <header>
      <div className="navbar-container">
        <h1>Gymmie</h1>
        {quote && (
          <p className="quote">"{quote}"</p>
        )}
      </div>
    </header>
  );
};

export default Navbar;
