

import React from "react";
import { FaSearch } from "react-icons/fa"; 
import "./Navbar.css"; 

function Header() {
  return (
    <header className="header">
      <img
        src="/machinary.png"
        alt="Machinery Trader Logo"
        className="logo"
      />

      <h1 className="title">
        Machinery <span>Trader</span>
      </h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search (ex: Keywords or Quick Find Code)"
        />
        <button>
          <FaSearch />
        </button>
      </div>
    </header>
  );
}

export default Header;

