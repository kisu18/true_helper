
import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkMode";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🆘 TrueHelp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/location">Location</Link>
        <Link to="/tips">Tips</Link>
       
      </div>
      <DarkModeToggle/>
    </nav>
  );
}
