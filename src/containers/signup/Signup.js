import React from 'react';
import "./signup.css";

const Signup = () => {
  return (
    <div className='container center signup-welcome'>
      <p className='tagline'>1% OF THE INDUSTRY</p>
      <h1 className='header center'>Welcome to your new digital reality that will rock your world truly at all throughout.</h1>
      <div className='input'>
      <input placeholder='Enter your email'></input>
      <button className='submit'>Submit</button>
      </div>
      <div className='highlights'>
        <div className='higlight'>
            <img src='/check.png' className='check'/>
            <span className='text'>Fully Secure</span>
        </div>
        <div className='higlight'>
            <img src='/check.png' className='check'/>
            <span className='text'>24/7 Support</span>
        </div>
        <div className='higlight'>
            <img src='/check.png' className='check'/>
            <span className='text'>Done Deal</span>
        </div>
      </div>
    </div>
  )
}

export default Signup
