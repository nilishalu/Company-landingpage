import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
    <ul className='nav-links'>
        <li><a href=''>Lookscout</a></li>
        <li><a href=''>Home</a></li>
        <li><a href=''>Our Products</a></li>
        <li><a href=''>Resources</a></li>
        <li><a href=''>Contacts</a></li>
        <button>Login</button>
        <button>SignUp</button>
    </ul>
    </div>
  )
}

export default Navbar
