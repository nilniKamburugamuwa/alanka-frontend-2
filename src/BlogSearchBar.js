import React from 'react';
import './BlogSearchBar.css';
import { Link } from 'react-router-dom';

const BlogSearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (

  <div className='blogSearchBar'>
    <Link  to='/blogHome'>
      <img className='blogSearchBar__logo' src='../alanka_blog.png'/>
    </Link>
    <form className='blogSearchBar__search' onSubmit={formSubmit}>
      <input
        className='blogSearchBar__input'
        type='text'
        placeholder='Search By Title'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span className='blogSearchBar__cross' onClick={clearSearch}>X</span>}
      <button className='blogSearchBar__button'>Search</button>
    </form>
    <div className='blogSearchBar__nav'>
      <Link to='/'>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Home</span>
        </div>
      </Link>
    </div>
  </div>
);

export default BlogSearchBar;