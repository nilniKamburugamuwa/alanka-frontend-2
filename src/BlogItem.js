import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import './BlogItem.css';

const BlogItem = ({blog}) => {
  return (
    <div className='blogItem'>
      <img className='blogItem-cover' src={blog.image} alt='cover' />
      {/*<Chip label={category} /> */}
      <Link className='blogItem-wrap' to={`/blog/${blog.blogId}`}>
        <h3>{blog.title}</h3>
      </Link>
      <p className='blogItem-desc'>{blog.content}</p>
      {/*<footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>*/}
    </div>
  );
};

export default BlogItem;