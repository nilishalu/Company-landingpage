import React from 'react'

const Profile = (data) => {
  return (
    <div className='profile'>
      <img src = {data.src} />
      <div className=''>
      <span>{data.name}</span>
      <span>{data.title}</span>
      </div>
    </div>
  )
}

export default Profile
