import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className='container hero'>
    <div className='hero-left'>
        <div className='header'>
          <h1>Your Supercharged Design Workflow.</h1>
          <h3>We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</h3>
          <button className='enter'>Get Started</button>
        </div>
        <div className='supporters'>
        <p className='partners-header'>Who supports us</p>
        <div>
          <img src='/gitlab.png'/>
          <img src='/slack.png'/>
          <img src='/netflix.png'/>
          <img src='/paypal.png'/>
        </div>
        </div>
    </div>
    <div className='hero-right'>
    
    </div>
    </div>
  )
}

export default Home
