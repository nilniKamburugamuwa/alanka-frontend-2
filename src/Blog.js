import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from './data';
import Chip from './Chip';
import EmptyList from './EmptyBlogList';
import './Blog.css';
import { Link } from 'react-router-dom';
import BlogSearchBar from './BlogSearchBar';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      
      <Link className='blog-goBack' to='/blogHome'>
        <div className='blog__back'><span> &#8592;</span> <span>Go Back</span></div>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;