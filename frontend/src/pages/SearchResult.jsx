import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, categoryName, manufacturers, keywords } = location.state || {};

  return (
    <div className="results-container">
      <header className="navbar">
        <h1>Search Results</h1>
      </header>

      <div className="results">  
        {keywords && (
          <div className="keyword-search">
            <h2>Search Results for: "{keywords}"</h2>
          </div>
        )}
        
      {keywords !== undefined && (
  <div className="keyword-search">
  <h2>
    Search Results for: "{keywords || "All Categories"}"
  </h2>
</div>

)}

        
        {manufacturers && manufacturers.length > 0 && (
          <>
            <h3>Manufacturers:</h3>
            <ul>
              {manufacturers.map((m, index) => (
                <li key={index}>{m}</li>
              ))}
            </ul>
          </>
        )}
        
        <div className="search-results-placeholder">
          <p>Search results will be displayed here...</p>
         <p>
  Showing results for "{keywords || categoryName || "All Categories"}"
</p>

        </div>
      </div>

      <button onClick={() => navigate("/")} className="back-btn">
        Back to Home
      </button>
    </div>
  );
};

export default SearchResults;