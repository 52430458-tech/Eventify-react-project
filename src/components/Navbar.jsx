import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        EVENT<span>IFY</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/events" className="nav-btn">
        Explore Events <span>→</span>
      </Link>
    </nav>
  );
}

export default Navbar;
