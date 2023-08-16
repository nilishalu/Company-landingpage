import React from 'react';
import { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navbar">
      <img src='/logo.png' className='logo' />
      <button className={`navbar-toggle ${navOpen ? 'active' : ''}`} onClick={toggleNav}>
        <span className="toggle-icon"></span>
      </button>
      <ul className={`nav-list ${navOpen ? 'active' : ''}`}>
      <li><a href=''>Home</a></li>
          <li><a href=''>Our Products</a></li>
          <li><a href=''>Resources</a></li>
          <li className='middle'><a href=''>Contacts</a></li>
          <li><button className='login'>Login</button></li>
          <li><button className='signup'>SignUp</button></li>
      </ul>
    </div>
  );
  };

export default Navbar;
