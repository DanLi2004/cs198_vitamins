//import React
import React from 'react';
// Import Link to navigate between pages
import { Link } from 'react-router-dom';
// Import the CSS file for styling
import './Navbar.css';

const Navbar = () => {
  return (
   // fill in the rest here!
   // add Home and NotHome, including links (after routing established)
    <nav className="navbar">
        <div className="navbar-brand">
        <h1>My Website</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/nothome" className="nav-link">Not Home</Link>
      </div>
    </nav>
  );
};

// Always export your components so they can be imported in other files
export default Navbar;