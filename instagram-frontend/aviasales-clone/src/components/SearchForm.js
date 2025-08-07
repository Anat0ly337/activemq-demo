import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form-wrapper">
      <h1>Search cheap flight tickets</h1>
      <div className="search-form-tabs">
        <button className="active">Flights</button>
        <button>Hotels</button>
      </div>
      <form className="search-form">
        <div className="search-form-inputs">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="text" placeholder="Departure" />
          <input type="text" placeholder="Return" />
          <input type="text" placeholder="1 passenger, Economy" />
        </div>
        <button type="submit" className="search-flights-button">
          Search flights
        </button>
      </form>
      <div className="search-form-options">
        <button>Create multi-city route</button>
      </div>
    </div>
  );
}

export default SearchForm;
