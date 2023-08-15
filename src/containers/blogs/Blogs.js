import React from 'react';
import Blog from '../../cards/blog/Blog';
import { blogs } from '../../data/blogs';

const Blogs = () => {
  return (
    <div className='container'>
      <h2 className='center header'>Latest Blog Posts</h2>
      <p className='center sub-header'>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>
      <Blog data = {blogs}/>
    </div>
  )
}

export default Blogs
