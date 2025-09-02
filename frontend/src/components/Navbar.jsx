import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Sample data abhi ma use kr re 
  const sampleSuggestions = [
    "Excavators",
    "Bulldozers", 
    "Cranes",
    "Loaders",
    "Backhoes",
    "Dump Trucks",
    "Graders",
    "Compactors",
    "Forklifts",
    "Skid Steers",
    "Caterpillar 320",
    "John Deere 310",
    "Komatsu PC200",
    "Volvo EC210",
    "Case CX210",
    "Hitachi ZX200",
    "JCB 3CX",
    "Liebherr R936",
    "Doosan DX225",
    "Hyundai HX220"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = sampleSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 8); 
      
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedSuggestionIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e, searchQuery = null) => {
    e.preventDefault();
    
    const queryToSearch = searchQuery || searchTerm.trim();
    
    if (queryToSearch) {
      navigate("/search", {
        state: {
          category: "",
          categoryName: "All Categories",
          manufacturers: [],
          keywords: queryToSearch,
        },
      });
    } else {
      navigate("/search", {
        state: {
          category: "",
          categoryName: "All Categories",
          manufacturers: [],
          keywords: "", 
        },
      });
    }
    
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    handleSearch({ preventDefault: () => {} }, suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else {
        handleSearch(e);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputFocus = () => {
    if (searchTerm.trim().length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <>
      <div className="top-nav">
        <div className="top-nav-left">
          <span>Login / Dealer Portal / VIP Portal</span>
          <span className="register">Register</span>
        </div>
        <div className="top-nav-right">
          <span>Advertising</span>
          <span>Contact Us</span>
          <span className="language">
            EN <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjMDAyODY4Ii8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIxLjM4NDYyIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSIyLjc2OTIzIiB3aWR0aD0iMjQiIGhlaWdodD0iMS4zODQ2MiIgZmlsbD0iI0JGMDQxNiIvPgo8L3N2Zz4K" alt="US Flag" className="flag" />
          </span>
          <span className="global-brands">
            <FaGlobe /> Global Brands
          </span>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-item">Login / Dealer Portal / VIP Portal</div>
        <div className="mobile-menu-item">Register</div>
        <div className="mobile-menu-item">Advertising</div>
        <div className="mobile-menu-item">Contact Us</div>
        <div className="mobile-menu-item">EN 🇺🇸</div>
        <div className="mobile-menu-item">Global Brands</div>
      </div>
     
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img
              src="machinary.PNG"
              alt="Machinery Trader Logo"
              className="logo"
            />
            <h1 className="title">
              Machinery <span>Trader</span>
            </h1>
          </div>
                   
          <div className="search-container">
            <form className="search-box" onSubmit={handleSearch}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search (ex: Keywords or Quick Find Code)"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                onFocus={handleInputFocus}
                autoComplete="off"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions-dropdown" ref={suggestionsRef}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`suggestion-item ${
                      index === selectedSuggestionIndex ? 'highlighted' : ''
                    }`}
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  >
                    <FaSearch className="suggestion-icon" />
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;