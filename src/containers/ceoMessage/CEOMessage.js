import React from 'react';
import Profile from '../../components/profile/Profile';
import "./ceomessage.css";

const CEOMessage = () => {
  return (
    <div className='container center'>
      <div className='ceo-message'>
      <img src='/logo-dark.jpg'/>
      <p className='subheader-higher'>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!</p>
      <Profile src ="/Avatar.png" name = "Lisa Smith" title = "CEO Company"/>
      </div>
    </div>
  )
}

export default CEOMessage
