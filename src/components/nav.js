import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav = (props) => {
  return (
    <div>
      <Navbar fixed="top" className="navbar navbar-fixed-top">
        <div className=" container-fluid">
          {/* <div className="brand-title "> */}
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Athena Networks
            </Link>
          </Navbar.Brand>

          {/* </div> */}
          <Link to="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </Link>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
