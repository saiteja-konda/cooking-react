import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div class="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="#" className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="sass.html">Home</Link>
            </li>
            <li>
              <Link to="badges.html">Blog</Link>
            </li>
            <li>
              <Link to="collapsible.html">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
