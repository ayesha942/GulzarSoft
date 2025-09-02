import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navigation Bar */}
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

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-item">Login / Dealer Portal / VIP Portal</div>
        <div className="mobile-menu-item">Register</div>
        <div className="mobile-menu-item">Advertising</div>
        <div className="mobile-menu-item">Contact Us</div>
        <div className="mobile-menu-item">EN 🇺🇸</div>
        <div className="mobile-menu-item">Global Brands</div>
      </div>

      {/* Main Header */}
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
          
          <div className="search-box">
            <input
              type="text"
              placeholder="Search (ex: Keywords or Quick Find Code)"
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;