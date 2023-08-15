import React from 'react';
import Profile from '../../components/profile/Profile';
import "./blog.css";

const Blog = (props) => {
  const blogs = props.data;
  return (
    <div className='blogs'>        
            {blogs.map((blog, index) => (
                <div key={index} className=''>
                    <img src={blog.image} />
                    <h2 className='title'>{blog.title}</h2>
                    <p className='descr'>{blog.desc}</p>
                    <div className='author'>
                        <Profile src ={blog.author_img} name = {blog.author} title = {blog.role}/>
                        <span>{blog.date}</span>
                    </div>
                </div>
            ))};
        </div>
  )
}

export default Blog
