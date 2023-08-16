import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='container footer'>
      <div className='footer-row'>
        <div className='column'>
          <img src='/logo.png'/>
          <p>Generate outside the box thinking with the possibility to targtet the low.</p>
        </div>
        <div className='column'>
          <h3>Resources</h3>
          <ul>
            <li>Community</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className='column'>
        <h3>Products</h3>
          <ul>
            <li>Integrations</li>
            <li>Solutions</li>
            <li>Features</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div className='column'>
        <h3>Get Email Notifications</h3> 
        <p>Generate outside the box thinking with the possibility to targtet the low</p>
        <input placeholder='Enter email...'></input>
        <button className='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;
