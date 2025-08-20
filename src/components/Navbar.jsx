import React from "react";
import "./Navbar.css";
import { FaSpotify, FaHome, FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
  
      <div className="navbar-left">
        <FaSpotify className="logo" />
        
        <button className="nav-btn">
          <FaHome /> Home
        </button>
      </div>


      <div className="navbar-center">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="search-input"
        />
      </div>


      <div className="navbar-right">
        <button className="nav-icon">
          <FaBell />
        </button>
        <button className="nav-icon">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
