import React from 'react';
import "./profile.css";

const Profile = (data) => {
  console.log(data)
  return (
    <div className='profile'>
      <img src = {data.src} />
      <div className='desc'>
      <span style={{color: "#272D37"}}>{data.name}</span>
      <span style={{color: "#5F6D7E"}}>{data.title}</span>
      </div>
    </div>
  )
}

export default Profile;
