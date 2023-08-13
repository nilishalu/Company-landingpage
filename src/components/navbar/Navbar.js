import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='/logo.png' className='logo' />
        <a href=''>Home</a>
        <a href=''>Our Products</a>
        <a href=''>Resources</a>
        <a href=''>Contacts</a>
        <button className='login'>Login</button>
        <button className='signup'>SignUp</button>
    </div>
  )
}

export default Navbar;
