import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github">Github-Finder </i>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
