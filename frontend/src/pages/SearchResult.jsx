// frontend/src/pages/SearchResults.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, manufacturers } = location.state || {};

  return (
    <div className="results-container">
      <header className="navbar">
        <h1>Search Results</h1>
      </header>

      <div className="results">
        <h2>Selected Category: {category || "None"}</h2>
        <h3>Manufacturers:</h3>
        {manufacturers && manufacturers.length > 0 ? (
          <ul>
            {manufacturers.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        ) : (
          <p>No manufacturers selected.</p>
        )}
      </div>

      <button onClick={() => navigate("/")} className="back-btn">
        Back to Home
      </button>
    </div>
  );
};

export default SearchResults;
