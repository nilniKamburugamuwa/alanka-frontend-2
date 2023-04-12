import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chip from './Chip';
import EmptyList from './EmptyBlogList';
import './Blog.css';
import { Link } from 'react-router-dom';
import BlogSearchBar from './BlogSearchBar';

import axios from 'axios';
import BlogService from './BlogService';

const Blog = () => {
  const [blogList, setBlogList] = useState([])
  useEffect(()=>{
    BlogService.getAllBlogs().then((response) =>{
      setBlogList(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]) 
  const { id } = useParams();
  const [blog, setBlog] = useState(null);


  useEffect(() => {
    let blog = blogList.find((blog) => blog.blogId === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []); 

  return (
    <div className='blog'>
      <BlogSearchBar/>
      <Link className='blog-goBack' to='/blogHome'>
        <div className='blog__back'><span> &#8592;</span> <span>Go Back</span></div>
      </Link>
      {blog ? (
        <div className='blog__wrap'>
          <header className='blog__header'>
{/*             <p className='blog-date'>Published {blog.createdAt}</p>
 */}            <h1>{blog.title}</h1>
{/*             <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}
          </header>
          <div className='image__container'>
            <img className='blog__image' src={blog.image} alt='cover' />
          </div>
           
           <p className='blog__body'>{blog.content}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;